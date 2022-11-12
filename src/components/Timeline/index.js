
import {StyledTimeline} from "./styled"


function Timeline({searchValue, ...propriedades}) {
    
  
  const playlistNames = Object.keys(propriedades.playlists);
  
  // Statement
  // Retorno por expressão
  return (
      <StyledTimeline>
          {playlistNames.map((playlistName) => {
              
              const videos = propriedades.playlists[playlistName];
              
              return (
                  <section key={playlistName}>
                      <h2>{playlistName}</h2>
                      <div>
                          {videos
                          .filter((video)=>{
                            const titleNormalized = video.title.toLowerCase();
                            const searchValueNormalized = searchValue.toLowerCase();
                            return titleNormalized.includes(searchValueNormalized)
                        })
                          .map((video, key) => {
                            key = Math.random()
                            

                              if(playlistName !== "favoritos"){
                                return(
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )

                              }else{
                                return(
                                    <a key={key} href={video.url}>
                                        <img className="imgFavoritos" src={video.imagemPerfil} />
                                        <span>
                                            {video.title}
                                        </span>


                                    </a>
                                )
                              }
                                
                                  
                              
                          })}
                      </div>
                  </section>
              )
          })
          
          }
      </StyledTimeline>
  )
}

export default Timeline

