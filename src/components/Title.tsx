const Title = ({title, quote}:{
    title:string,
    quote:string
})  => {
  return (
    <div className="title-container">
        <h1 className="heading">{title}</h1>
        <p className="quote">{quote}</p>
    </div>
  )
}

export default Title
