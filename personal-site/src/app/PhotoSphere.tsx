import { useRef, useEffect } from 'react';

// figure out what items is in the guide
const CENTER_COUNT = 12
const RADIUS = 600
const TOTAL_ROW = 3
const PhotoSphere = () => {

    let rid:number
    let mouseShift:number = 0

    useEffect(() => {
        const angleDivision = (90 / TOTAL_ROW) * Math.PI / 180
        let radius, ypos, rowItemsCount =  CENTER_COUNT
        let indexCount = 0
        
        for (let k = 0; k < TOTAL_ROW; k++) {
            radius = RADIUS * Math.cos(k * angleDivision)
            ypos = RADIUS * Math.sin(-k * angleDivision)
            rowItemsCount = CENTER_COUNT / (k + 1)

            let angleUnit = 360 / rowItemsCount

            for (let i = 0; i < rowItemsCount; i++) {
                const angleRad = angleUnit * i *  Math.PI / 180
                const xp = Math.cos(angleRad) * radius
                const zp = Math.cos(angleRad) * radius

                const item =  items[indexCount] as HTMLDivElement
                item.className = `photosphere-item`
                item.style.transform = `translateY(${ypos}px) translateX(${xp}px) translateZ(${zp}px)`
                indexCount++

                const item2 =  items[indexCount] as HTMLDivElement
                item2.className = `photosphere-item`
                item2.style.transform = `translateY(${-ypos}px) translateX(${xp}px) translateZ(${zp}px)`
                indexCount++

                item.dataset.radius = item2.dataset.radius = radius.toString()
                item.dataset.angle = item2.dataset.angle = angleRad.toString()
                item.dataset.ypos = ypos.toString()
                item2.dataset.ypos = (-ypos).toString()
            }
        }


    })
    return (
        <div className='container'>
            <div className='photosphere'>
                <div className='photosphere-item'></div>
            </div>
        </div>
    )
}

export default PhotoSphere
