interface tweetprops{
name: string
children: string
likes?: number
}

export default function Tweet(tweetprops){
  return(
    <div className='tweet'>
      {tweetprops.name}
      {tweetprops.children}
      <button>Like{tweetprops.likes}</button>
    </div>
  )
}