import {StyledTimeline} from "./styled"


function Timeline(propriedades) {
  // console.log("Dentro do componente", propriedades.playlists);
  const playlistNames = Object.keys(propriedades.playlists);
  // Statement
  // Retorno por expressão
  return (
      <StyledTimeline>
          {playlistNames.map((playlistName) => {
              
              const videos = propriedades.playlists[playlistName];
              console.log(videos);
              return (
                  <section>
                      <h2>{playlistName}</h2>
                      <div>
                          {videos.map((video) => {
                              if(playlistName !== "favoritos"){
                                return(
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                              }else{
                                return(
                                    <a href={video.url}>
                                        <img className="imgFavoritos" src={video.imagemPerfil} />
                                        <span>
                                            {video.nome}
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

