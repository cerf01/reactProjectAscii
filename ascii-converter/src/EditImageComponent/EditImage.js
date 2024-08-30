import {  useRef } from "react";
import "./EditImage.css"

const EditImage = ({onApply}) =>
{
    const brightnessSliderRef = useRef(null);
    const contrastSliderRef = useRef(null);
    const grayscaleSliderRef = useRef(null);
    const saturateSliderRef = useRef(null);
    const sepiaSliderRef = useRef(null);
    const hueRotateSliderRef = useRef(null);

    const applyFilter = () => {

        if(brightnessSliderRef.current == null)
            return
        let filterString =
        "brightness(" + brightnessSliderRef.current.value + "%" +
        ") contrast(" + contrastSliderRef.current.value + "%" +
        ") grayscale(" + grayscaleSliderRef.current.value + "%" +
        ") saturate(" + saturateSliderRef.current.value + "%" +
        ") sepia(" + sepiaSliderRef.current.value + "%" +
        ") hue-rotate(" + hueRotateSliderRef.current.value + "deg" + ")";
        onApply(filterString);
    }

    const resetImage = () => {
        brightnessSliderRef.current.value = 100;
        contrastSliderRef.current.value = 100;
        grayscaleSliderRef.current.value = 0;
        saturateSliderRef.current.value = 100;
        sepiaSliderRef.current.value =0;
        hueRotateSliderRef.current.value = 0;
        applyFilter();
      
    }

    
return(
    <>
      <div class="image-edit" >
            <h6>Image edit</h6>
            <div class="row">
                <div class="col s6">
                    <span class="range-field">
                        <label>
                          Brightness
                        </label>
                        <input ref={brightnessSliderRef}
                               type="range"
                               min="0" max="300" 
                               defaultValue={100}                               
                               onChange={applyFilter}/>
                    </span>
                    
                </div>
                <div class="col s6">
                    <span class="range-field">
                        <label>
                          Contrast
                        </label>
                        <input ref={contrastSliderRef}
                               type="range"
                               min="0" max="200" 
                               defaultValue={100}
                               onChange={applyFilter}/>
                    </span>
                </div>
            </div>

            <div class="row">
                <div class="col s6">
                    <span class="range-field">
                        <label>
                          Grayscale
                        </label>
                        <input ref={grayscaleSliderRef}
                               type="range" 
                               min="0" max="100" 
                               defaultValue={0}
                               onChange={applyFilter}/>
                    </span>
                </div>
                <div class="col s6">
                    <span class="range-field">
                        <label >
                          Saturation
                        </label>
                        <input ref={saturateSliderRef}
                               type="range" 
                               min="0" max="300"
                               defaultValue={100}
                               onChange={applyFilter}/>
                    </span>
                </div>
            </div>

            <div class="row">
                <div class="col s6">
                    <span class="range-field">
                        <label>
                          Sepia
                        </label>
                        <input ref={sepiaSliderRef}
                               type="range" 
                               min="0" max="200" 
                               defaultValue={0}
                               onChange={applyFilter}/>
                    </span>
                </div>
                <div class="col s6">
                    <span class="range-field">
                        <label>
                          Hue
                        </label>
                        <input ref={hueRotateSliderRef}
                               type="range" 
                               min="0" max="360"
                               defaultValue={0}
                               onChange={applyFilter}/>
                    </span>
                </div>
            </div>
            <button onClick={resetImage}>Reset</button>
        </div>
    </>
)
}
export default EditImage;