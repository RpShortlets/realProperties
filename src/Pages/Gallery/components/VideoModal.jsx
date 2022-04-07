import React from 'react'
import Modal from "../../../components/Modal/Modal"


const VideoModal = ({isOpenVideo, setIsOpenVideo, src, query }) => {
    console.log( query)
    return (
        <Modal show={isOpenVideo}  animate={{scale: 1, opacity: 1, y: 10}} exit={{opacity: 0, scale: 0}} initial={{scale: 0.5, opacity: 0, y: 0}} setShow={setIsOpenVideo} btn borderRadius="0" boxShadow="none" background="transparent" theme="rgba(0,0,0,.9)" width={query ? "70%": '100%'} height="fit-content" left={query ? "15%": '0'} top={query ? "5%" : '30%'}>
            <div>
                <video
                    style={{ width: '100%', height: '100%', border:'1px solid var(--color-primary)' }}
                    src={src}
                    controls
                    loop
                    autoPlay
                />
            </div>
        </Modal>
    )
}

export default VideoModal