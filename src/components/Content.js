import React from 'react'

export default function Content() {
    return (
        <div className=' flex flex-col ' >
            <form action="" className='flex flex-col text-center mx-12 ' >
                <label htmlFor="content" className=' text-bold pb-10 mt-10 ' >Enter your text here:</label>
                <textarea name="content" id="content" cols="30" rows="1" className=' border-2 ' ></textarea>

                <button type='submit' className='btn' ></button>
            </form>
        </div>
    )
}
