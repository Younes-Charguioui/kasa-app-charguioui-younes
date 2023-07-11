import './style.scss'

function Tags({tags}) {
    const tagsList = tags.map(item => <li key={`tag-${item}`}>{item}</li>)
    return (
        <div id='tags-container'>
            <ul>
                {tagsList}
            </ul>
        </div>
    )
}

export default Tags