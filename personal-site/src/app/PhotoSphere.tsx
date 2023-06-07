import { useRef } from 'react';

const PhotoSphere = (props:{imageData: string[]}) => {

    const el = useRef<HTMLDivElement>(null);
    return (
        <div className='container my-4'>
            <div className='photosphere' ref={el}>
                {
                    props.imageData.map((it, index) => 
                        <div key={index} style={{backgroundImage: `url(${it})`}} className='photosphere'></div>
                    )
                }
            </div>
        </div>
    )
}

export default PhotoSphere
