import { ChevronLeftIcon, XIcon } from '@heroicons/react/outline'

import React, { FC } from 'react'

interface ModalHeaderProps {
    title?: string
    onClose?: () => void
}

const ModalHeader: FC<ModalHeaderProps> = ({ title = undefined, onClose = undefined }) => {
    return (
        <div className="relative flex items-center justify-center mb-4">
            {title && <h1 className="text-xl uppercase text-white mt-2">{title}</h1>}
            <div
                className="absolute top-0 right-0 flex mt-2 mr-2 text-white cursor-pointer hover:opacity-50"
                onClick={onClose}
            >
                <XIcon width={24} height={24} />
            </div>
        </div>
    )
}

export default ModalHeader
