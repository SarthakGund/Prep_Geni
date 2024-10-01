"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

export default function Page() {
  const [isListening, setIsListening] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [interimTranscript, setInterimTranscript] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [isInterviewStarted, setIsInterviewStarted] = useState(false);
  const [isInterviewComplete, setIsInterviewComplete] = useState(false);
  const username = "User";
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if ("SpeechRecognition" in window) {
      recognitionRef.current = new window.SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onresult = (event) => {
        let finalTranscript = "";
        let interimText = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const result = event.results[i];
          if (result.isFinal) {
            finalTranscript += result[0].transcript;
            setTranscript((prev) => prev + finalTranscript);
          } else {
            interimText += result[0].transcript;
          }
        }
        
        setInterimTranscript(interimText);
      };

      recognitionRef.current.onend = () => {
        if (isListening) {
          recognitionRef.current.start();
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
      };
    } else {
      console.error("Speech Recognition is not supported in this browser.");
    }
  }, []);

  useEffect(() => {
    if (isListening) {
      recognitionRef.current.start();
    } else {
      recognitionRef.current.stop();
    }
  }, [isListening]);

  const toggleListening = () => {
    setIsListening((prevState) => !prevState);
  };

  const toggleCamera = async () => {
    if (isCameraOn) {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      setIsCameraOn(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,  // Disable audio if not needed
        });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setIsCameraOn(true);
      } catch (error) {
        console.error("Error accessing webcam:", error);
        alert("Failed to access webcam. Make sure permissions are granted.");
      }
    }
  };
  

  const startInterview = async () => {
    try {
      const response = await fetch('http://localhost:5000/start_interview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 'user123', // Replace with actual user ID
          role: 'Software Developer', // Replace with actual role
          domain: 'Web Development', // Replace with actual domain
          experience: '3 years' // Replace with actual experience
        }),
      });
      const data = await response.json();
      setCurrentQuestion(data.firstQuestion);
      setIsInterviewStarted(true);
      setMessages([{ interviewer: data.firstQuestion }]);
    } catch (error) {
      console.error('Error starting interview:', error);
    }
  };

  const submitAnswer = async () => {
    if (!transcript.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { user: username, text: transcript },
    ]);

    try {
      const response = await fetch('http://localhost:5000/next_question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 'user123', // Replace with actual user ID
          userResponse: transcript
        }),
      });
      const data = await response.json();
      
      if (data.nextQuestion) {
        setCurrentQuestion(data.nextQuestion);
        setMessages((prevMessages) => [
          ...prevMessages,
          { interviewer: data.nextQuestion },
        ]);
      } else {
        setIsInterviewComplete(true);
      }

      setTranscript("");
      setInterimTranscript("");
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Head>
        <title>Video Interview</title>
      </Head>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 p-4 flex justify-center items-center">
          <div
            className="relative bg-gray-800 rounded-lg aspect-video w-full h-full cursor-pointer"
            onClick={toggleCamera}
          >
            <video
              ref={videoRef}
              className="rounded-lg object-cover w-full h-full"
              autoPlay
              muted
            />
            <div className="absolute bottom-2 left-2 text-sm flex items-center">
              <span>{username}</span>
              <span className="ml-2 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-2.5 h-2.5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a2 2 0 00-2 2v6a2 2 0 104 0V4a2 2 0 00-2-2zM5 8a1 1 0 00-1 1v2a4 4 0 008 0V9a1 1 0 10-2 0v2a2 2 0 11-4 0V9a1 1 0 00-1-1z" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="w-80 bg-gray-900 p-4 flex flex-col">
          <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-2">
            <div className="text-lg font-semibold">Interview</div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className="text-white mb-2">
                <strong>{msg.user || 'Interviewer'}: </strong> {msg.text || msg.interviewer}
              </div>
            ))}
            {interimTranscript && (
              <div className="text-gray-400 italic">{interimTranscript}</div>
            )}
          </div>

          {!isInterviewStarted && (
            <button
              onClick={startInterview}
              className="mt-4 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              Start Interview
            </button>
          )}

          {isInterviewStarted && !isInterviewComplete && (
            <div className="mt-4">
              <p className="mb-2 font-semibold">Current Question:</p>
              <p className="mb-4">{currentQuestion}</p>
              <button
                onClick={submitAnswer}
                className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300"
                disabled={!transcript.trim()}
              >
                Submit Answer
              </button>
            </div>
          )}

          {isInterviewComplete && (
            <div className="mt-4 text-center">
              <p className="font-semibold">Interview Completed</p>
              <p>Thank you for your participation!</p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-900 p-4 flex justify-center items-center space-x-4">
        <button className="p-2 bg-gray-800 rounded-full" onClick={toggleCamera}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ stroke: "currentColor" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>

        <button
          onClick={toggleListening}
          className="p-2 bg-white rounded-full mic"
        >
          <svg
            className="w-6 h-6"
            fill={isListening ? "white" : "red"}
            stroke={isListening ? "red" : "red"}
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        </button>
        <Link href="/interview">
          <button className="p-2 bg-red-600 rounded-full">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}