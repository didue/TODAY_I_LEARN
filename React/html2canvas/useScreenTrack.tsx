// befor use this hook, you should install html2canvas
// >> npm install html2canvas
import html2canvas from "html2canvas";


export const useScreenTrack = () => {

  const handleCapture = () => {
    html2canvas(document.body)
      .then((canvas: HTMLCanvasElement) => {
      const dataUrl = canvas.toDataURL('image/png');
      
      const aTag = document.createElement('a');
      document.body.appendChild(aTag);
      aTag.href = dataUrl;
      aTag.download = 'capture.png';
      aTag.click();      
      document.body.removeChild(aTag);

    }).catch(error => {
      console.error('Error on Converting div to Image. :', error);
    });
  }


  // const handleCapture = async () => {
  //   try{
  //     const canvas = await html2canvas(document.body);

  //     canvas.toBlob((blob) => {
  //       if(blob !== null){
  //         // console.log('blob :', blob);
  //         // console.log('blob url : ', URL.createObjectURL(blob));

  //         const render = new FileReader();
  //         render.readAsDataURL(blob);
  //         render.onload = () => {
  //           // console.log('render.result :', render.result);
  //           const aTag = document.createElement('a');
  //           document.body.appendChild(aTag);
  //           aTag.href = render.result as string;
  //           aTag.download = 'capture.png';
  //           aTag.click();
  //           // document.body.removeChild(aTag);
  //         }
  //         // const aTag = document.createElement('a');
  //         // document.body.appendChild(aTag);
  //         // // aTag.href = URL.createObjectURL(blob);
  //         // aTag.download = 'capture.png';
  //         // aTag.click();
  //         // document.body.removeChild(aTag);

  //   //a태그 버튼 만들어서 이미지 다운로드
  //       }
  //     });
  //   }catch(error){
  //     console.error('Error on Converting div to Image. :', error);
  //   }
  // }

    return {handleCapture} ; 
}