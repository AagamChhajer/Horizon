
"use client"
import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const api_key = "MDUmhShkcQTpnD7H6ZtL"
const roboURL = "https://detect.roboflow.com/gojo/1"
const segmentationURL = "https://xth9xnbt-3000.inc1.devtunnels.ms/"

/**
 * BrainTumor component for processing brain tumor images.
 * 
 * @param api_key The API key for accessing the model.
 * @param roboURL The URL for the model endpoint.
 * @param ngrokURL The URL for the segmentation server.
 */
export default function BrainTumor() {
  //defining the states
  const [userSelectedFile, setUserSelectedFile] = useState(null);
  const [leftImage, setLeftImage] = useState<any>(null);
  const [inference, setInference] = useState<any>("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
  const [roboflowResponse, setRoboflowResponse] = useState<any>(null);

  useEffect(() => {
    async function segmentationFunction() {
      if (!leftImage || !roboflowResponse) {
        console.log(
          "Either left image is not available or roboflow response is not available"
        );
      } else {
        console.log("segmentation function ran");

        const response = await axios({
          method: "POST",
          url: segmentationURL,
          data: {
            base64: leftImage,
            disease: "Brain Tumor",
            predictions: roboflowResponse,
          },
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log(response.data);
        setLeftImage(response.data.base64);
        setInference(response.data.inference);
      }
    }

    segmentationFunction();
  }, [roboflowResponse]);

  function onFileChange(event: any) {
    setUserSelectedFile(event.target.files[0]);
    console.log(setUserSelectedFile);
    // Reset coordinates when a new file is selected
  }

  async function onProcess() {
    if (!leftImage) {
      toast.error("Please upload a file before processing ");
      return;
    } else {
      const response = await axios({
        method: "POST",
        url: roboURL,
        params: {
          api_key: api_key,
        },
        data: leftImage,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response.data) {
        toast.success("received Model Response");
        toast.info("request sent to segmentation server ");
        console.log(response.data);
        setRoboflowResponse(JSON.stringify(response.data));

      } else {
        toast.error("something went wrong with the model");
      }
    }
  }

  async function onFileUpload() {
    if (!userSelectedFile) {
      toast.error("Select a file before uploading.");
      return;
    }

    console.log("File upload started");

    const reader = new FileReader();

    // Add an event listener to handle the completion of the read operation
    reader.onload = function () {
      let base64Data = reader.result;

      if (!base64Data) {
        toast.error("Please select a valid image file.");
      } else {
        // @ts-ignore
        base64Data = base64Data.replace(/^data:image\/[a-z]+;base64,/, "");
        setLeftImage(base64Data);
        setInference(null);
      }
    };

    // Read the file as a data URL
    reader.readAsDataURL(userSelectedFile);
  }

  return (
    <div className="flex flex-col h-screen bg-gray-300 " style={{
      backgroundImage: "url('https://scx2.b-cdn.net/gfx/news/hires/2018/neuralnetwork.jpg')"
    }} >
      <div className="flex flex-row justify-between items-stretch py-10 px-10 space-x-20 ">
        <div className="w-1/2 flex flex-col text-center justify-center space-y-3">
          <div className="rounded-lg border-black border-4 text-xl bold font-mono font-bold bg-slate-100">
            <h1>findings</h1>
          </div>
          <div className="bg-slate-100 flex justify-center items-center py-5 h-full border-black border-4 rounded-lg">
            {!leftImage ? (
              <img className="w-96 h-96" src="https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/file-upload-icon.png" />
            ) : (
              <img
                className="mt-8 w-min h-96"
                src={`data:image/jpeg;base64,${leftImage}`}
                alt="Uploaded"
              />
            )}
          </div>
        </div>

        <div className="w-1/2 flex flex-col text-center justify-center space-y-3">
          <div className="rounded-lg border-black border-4 font-mono font-bold text-xl bg-slate-100">
            <h1>inference</h1>
          </div>
          <div className="bg-slate- flex justify-center items-center py-5 h-full rounded-lg border-black border-4 font-mono bg-slate-100">
            {inference}
          </div>
        </div>
      </div>

      <div className="flex flex-row space-y-4 justify-around">
        <input
          className="bg-slate-950 text-white w-30 px-4 py-2 rounded mx-4"
          type="file"
          onChange={onFileChange}
        />
        <Button variant={"default"} onClick={onFileUpload}> <h1 className="text-xl">Upload Image
        </h1> </Button>
        <Button variant={"default"} onClick={onProcess}><h1 className="text-xl">Process Image
        </h1></Button>

      </div>
    </div>
  );
}
