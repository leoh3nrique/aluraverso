
import {StyledTimeline} from "./styled"
import Link from "next/link";
import React from "react";

let obj ={}
export const InfoVideoContext = React.createContext(obj)



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
                                {obj.title= video.title}
                                {obj.url = video.url}
                                {obj.thumb = video.thumb}
                                return(
                                    <Link  key={video.url} href="/videos" >
                                        
                                        
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </Link>
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

