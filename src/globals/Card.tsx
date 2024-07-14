
import { HTMLAttributes } from 'react'

import classNames from 'classnames'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    text?: string
    image?: string
}

const Card = ({ image, text, children, ...props }: CardProps) => {
    return (
        <div {...props} className={classNames("p-[6px] rounded-sm flex justify-center items-center gap-y-[20px]", props.className)}>


            {children}
        </div>
    )
}

export default Card
