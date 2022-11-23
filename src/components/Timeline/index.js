
import {StyledTimeline} from "./styled"
import Link from "next/link";
import React from "react";

let obj ={}
export const InfoVideoContext = React.createContext(obj)
//Foi criado um hook context para ser feita a busca das informaçoes necessarias para cada video, ou seja, a cada filtragem ele pega as informaçoes daquele video para ser ultilizada no arquivo Video.js



function Timeline({searchValue, ...propriedades}) {
    
  
  const playlistNames = Object.keys(propriedades.playlists);

  
  
  // Statement
  // Retorno por expressão
  return (
      <StyledTimeline>
          {playlistNames.map((playlistName) => {
              
              const videos = propriedades.playlists[playlistName];
              
              return (
                 <>
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
                                //As informacoes vao ser adicionados em um objeto vazio de nome "obj"
                                return(
                                    //Quando ele clicar na thumb/Link, ele vai ser redirecionado para a page videos.js e, as informacoes daquele video em si, vao ser filtradas e armazenadas no hook InfoVideoContext 
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
    
                          }
                                                  
                          )}
                      </div>
                      
                      
                  </section>
                  
                 
                 </>
                  
              )
          })
          
          }
      </StyledTimeline>
  )
}

export default Timeline

