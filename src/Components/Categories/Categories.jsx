import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './categories.css'
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";

function Categories() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
  
    const imagesListRef = ref(storage, "categories/");
    const uploadFile = () => {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `categories/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    };
  
    useEffect(() => {
      const fetchImages= async ()=>{
        try {
            const response = await listAll(imagesListRef);
            const urls = await Promise.all(
              response.items.map(async (item) => {
                const url = await getDownloadURL(item);
                return url;
              }))
              setImageUrls(urls);

            // listAll(imagesListRef).then((response) => {
            //     console.log(response);
            //     response.items.forEach((item) => {
            //         getDownloadURL(item).then((url) => {
            //             setImageUrls((prev) => [...prev, url]);
            //         });
            //     });
            //     console.log(imageUrls)
            //     // <img key={index} src={url} alt={`Image ${index}`} style={{ width: '200px', height: '200px', margin: '10px' }} />
            // });
        } catch (error) {
            console.log(error)
        }
      }
      fetchImages();
    }, [imagesListRef]);    


    const items = imageUrls.map((url, index) => (
        <div key={index} className="item" data-value={index + 1}>
          <img src={url} alt={`Image ${index}`} style={{ width: '96px', height: '96px' }} />
        </div>
      ));


    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
        // 2000:{ items: 4 },
        // 2200:{ items: 5 },
        // 2400:{ items: 6 },
    };
    // console.log({imageUrls})
    
    // const items = [
    //     <div className="item" data-value="1">1</div>,
    //     <div className="item" data-value="2">2</div>,
    //     <div className="item" data-value="3">3</div>,
    //     <div className="item" data-value="4">4</div>,
    //     <div className="item" data-value="5">5</div>,
    //     <div className="item" data-value="6">5</div>,
    //     // <div className="item" data-value="5">5</div>,
    //     // <div className="item" data-value="5">5</div>,
    //     // <div className="item" data-value="5">5</div>,
    // ];
  return (
    <div className='categories'>    
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        />
    </div>
  )
}

export default Categories
