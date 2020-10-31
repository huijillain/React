import React, { Component} from 'react'
import { render } from 'react-dom'

const Book = ({title, author, pages}) => {
    return (
        <section>
           <h2>{title}</h2>
           <p>by: {author}</p>
           <p>Pages: {pages}</p>
        </section>
    )
}

const Library = () => {
    return (
        <div>
            <Book title="This Sun Also Rises" author="Ernest Hemingway" pages={260}/>
            <Book title="White Teeth" author="Zadie Smith" pages={450}/>
            <Book title="Lovely cats!" author="Ernest Hemingway" pages={780}/>
        </div>
    )
}

render(
           <Library />,
document.getElementById('root')
)