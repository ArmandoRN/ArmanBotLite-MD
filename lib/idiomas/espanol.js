const lenguaje = () => { return 'es' } //Español  

const smsAvisoRG = () => { return `*RESULTADO*\n\n` } 
const smsAvisoAG = () => { return `*ADVERTENCIA*\n\n` }
const smsAvisoIIG = () => { return `*INFORMACIÓN*\n\n` }
const smsAvisoFG = () => { return `*ERROR*\n\n` }
const smsAvisoMG = () => { return `*ACCIÓN MAL USADA*\n\n` }
const smsAvisoEEG = () => { return `*REPORTE*\n\n` }
const smsAvisoEG = () => { return `*ÉXITO*\n\n` }

const smsRowner = () => { return `\`\`\`¡¡ESTE COMANDO SÓLO EL NÚMERO DEL BOT PUEDE USAR!!\`\`\`` }
const smsOwner = () => { return `\`\`\`¡¡ESTE COMANDO SÓLO MI CREADOR(A) LO PUEDE USAR!!\`\`\`` }
const smsMods = () => { return `\`\`\`¡¡ESTE COMANDO SÓLO MODERADORES Y MI CREADOR(A) LO PUEDEN USAR!!\`\`\`\`` }
const smsPremium = () => { return `\`\`\`¡¡ESTE COMANDO SÓLO ESTA DISPONIBLE PARA USUARIOS PREMIUM Y MI CREADOR(A)!! PARA SER PREMIUM COMPRE UN PASE USANDO #pass premium\`\`\`` }
const smsGroup = () => { return `\`\`\`¡¡ESTE COMANDO SÓLO SE PUEDE UTILIZAR EN GRUPOS!!\`\`\`` }
const smsPrivate = () => { return `\`\`\`¡¡ESTE COMANDO SÓLO SE PUEDE UTILIZAR AL PRIVADO!!\`\`\`` }
const smsAdmin = () => { return `\`\`\`¡¡ESTE COMANDO SÓLO ES PARA ADMINS!!\`\`\`` }
const smsBotAdmin = () => { return `\`\`\`¡¡NECESITO SER ADMIN PARA QUE PUEDAS USAR ESTE COMANDO!!\`\`\`` }
const smsUnreg = () => { return `\`\`\`¡¡NECESITAS ESTAR REGISTRADO(A) PARA USAR ESTE COMANDO, ESCRIBE #verificar PARA REGISTRARTE!!\`\`\`` }
const smsRestrict = () => { return `\`\`\`¡¡ESTE COMANDO ESTÁ RESTRINGIDO POR MI CREADORA(A)!!\`\`\`` }

//main.js
const smsWelcome = () => { return `*╭┈⊰* @subject *⊰┈ ✦*\n*┊✨ BIENVENIDO(A)!!*\n┊💖 @user\n┊📄 *LEA LA DESCRIPCIÓN DEL GRUPO*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n${String.fromCharCode(8206).repeat(850)}\n@desc`}
const smsBye = () => { return '*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ *@user*\n┊ *NO FUE DIGNO(A) DE ESTAR AQUÍ!!* 🌟\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*'}
const smsSpromote = () => { return '*@user HA SIDO ASCENDIDO COMO ADMIN DEL GRUPO!!*'}
const smsSdemote = () => { return '*@user HA SIDO DEGRADADO COMO ADMIN DEL GRUPO!!*'}
const smsSdesc = () => { return '*CONOZCAN LA NUEVA DESCRIPCIÓN DEL GRUPO:*\n\n@desc'}
const smsSsubject = () => { return '*SE HA ACTUALIZADO EL NOMBRE DEL GRUPO!!*\n@subject'}
const smsSicon = () => { return '*SE HA ACTUALIZADO LA FOTO DEL GRUPO!!*'}
const smsSrevoke = () => { return '*CONOZCAN EL NUEVO ENLACE DEL GRUPO!!*\n*@revoke*'}
const smsConexion = () => { return `\n╭┈ ┈ ┈ ┈ ┈ • ${packname} • ┈ ┈ ┈ ┈ ┈╮\n┊ CONEXIÓN EXITOSA CON WHATSAPP\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈╯`} 
const smsCargando = () => { return `✨ CARGANDO...\n`} 
const smsCodigoQR = () => { return `\n✅ ESCANEA EL CÓDIGO QR EXPIRA EN 45 SEGUNDOS ✅`}
const smsConexionOFF = () => { return `\n⚠️ SIN CONEXIÓN, BORRE LA CARPETA ${global.authFile} Y ESCANEA EL CÓDIGO QR ⚠️`}
const smsClearTmp = () => { return `\n╭▸ ☘️ MULTIMEDIA ☘️\n┆• ARCHIVOS DE LA CARPETA TMP ELIMINADAS\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSession = () => { return `\n╭▸ 🌻 ${global.authFile} 🌻\n┆• SESIONES NO ESENCIALES ELIMINADAS\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeOldFiles = () => { return `\n╭▸ 🌹 ARCHIVOS 🌹\n┆• ARCHIVOS RESIDUALES ELIMINADAS\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB1 = () => { return `\n╭▸ 🌺 JadiBot 🌺\n┆• NADA POR ELIMINAR \n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB2 = () => { return `\n╭▸ 🌼 JadiBot 🌼\n┆• ARCHIVOS NO ESENCIALES ELIMINADOS\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeSessionSB3 = () => { return `\n╭▸ ⚠️ JadiBot ⚠️\n┆• OCURRIÓ UN ERROR\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎\n`} 
const smspurgeOldFiles1 = () => { return `\n╭▸ ♻️ ARCHIVO ♻️\n┆•`} 
const smspurgeOldFiles2 = () => { return `BORRADO CON ÉXITO\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎`} 
const smspurgeOldFiles3 = () => { return `\n╭▸ ⚠️ ARCHIVO ⚠️\n┆•`} 
const smspurgeOldFiles4 = () => { return `NO SE LOGRÓ BORRAR\n╰┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈◎\n`} 


//Boton
const smsConMenu = () => { return `🌻 MENU`}


//Error
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`OCURRIÓ UN ERROR INESPERADO.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`SURGIÓ UN INCONVENIENTE.\`\`\`\n`}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ALGO SALIÓ MAL\`\`\`\n`}

//descargas.js
const smsYT1 = () => { return 'TÍTULO'}
const smsYT2 = () => { return 'DESCRIPCIÓN'}
const smsYT3 = () => { return 'DURACIÓN'}
const smsYT4 = () => { return 'VISTAS'}
const smsYT5 = () => { return 'VER EN YOUTUBE'}
const smsYT6 = () => { return 'INTENTE CON OTRO NOMBRE'}

//descargas.js
const smsYTA1 = () => { return 'DESCARGANDO AUDIO'}

//descargas.js
const smsYTV1 = () => { return 'DESCARGANDO VIDEO'}

//descargas.js
const smsYTA2 = () => { return 'DESCARGANDO DOCUMENTO DE AUDIO'}

//descargas.js
const smsYTV2 = () => { return 'DESCARGANDO DOCUMENTO DE VIDEO'}

//descargas.js
const smsTiktok = () => { return 'DESCARGANDO VÍDEO DE TIKTOK'}


//buscadores.js
const smsOpenai1 = () => { return '*REALICE UNA CONSULTA, EJEMPLO:*'} 
const smsOpenai2 = () => { return 'Recomienda un top 10 de películas de acción'} 
const smsOpenai3 = () => { return 'Explica que es una ecuación de tercer grado y realiza un ejemplo simple y otro compuesto'} 

//convertidores.js
const smsToimg = () => { return lenguajeGB.smsAvisoMG() + '*RESPONDA A UN STICKER PARA CONVERTIR A IMAGEN*'} 

//convertidores.js
const smsConURL = () => { return lenguajeGB.smsAvisoMG() + '*RESPONDA A UNA IMAGEN PARA CONVERTIR A ENLACE*'} 
const smsConURL1 = () => { return '*ENLACE*'} 
const smsConURL2 = () => { return '*TAMAÑO*'} 
const smsConURL3 = () => { return '*CADUCIDAD*'} 
const smsConURL4 = () => { return '*ENLACE ACORTADO*'}
const smsConURLERR1 = () => { return 'Infinita'} 
const smsConURLERR2 = () => { return 'Desconocida'} 

//convertidores.js
const smsConVIDEO = () => { return lenguajeGB.smsAvisoMG() + '*RESPONDA A STICKER EN MOVIMIENTO PARA CONVERTIR A VÍDEO*'} 
const smsConVIDEO2 = () => { return lenguajeGB.smsAvisoMG() + '*SÓLO STICKER EN MOVIMIENTO PARA CONVERTIR A VÍDEO*'} 
const smsConVIDEO3 = () => { return lenguajeGB.smsAvisoEG() + '*✓ AQUÍ TIENES TÚ VÍDEO!!*'} 

//convertidores.js
const smsConGIF = () => { return lenguajeGB.smsAvisoMG() + '*RESPONDA A UN VÍDEO PARA CONVERTIR A GIF CON AUDIO*'} 
const smsConGIF2 = () => { return lenguajeGB.smsAvisoMG() + '*RESPONDA A UN VÍDEO. EL TIPO DE ARCHIVOS USADO NO ES CORRECTO* '} 
const smsConGIF3 = () => { return lenguajeGB.smsAvisoEG() + '*GIF CON AUDIO (Abre el gif para escuchar el audio)*'} 

//convertidores.js
const smsConVN = () => { return lenguajeGB.smsAvisoMG() + '*RESPONDA A UN VÍDEO O AUDIO PARA CONVERTIR A NOTA DE VOZ*'} 
const smsConVN1 = () => { return lenguajeGB.smsAvisoFG() + '*ERROR, INTENTE DE NUEVO*'} 
const smsConVN2 = () => { return lenguajeGB.smsAvisoFG() + '*ERROR, INTENTE DE NUEVO*'} 
const smsConVN3 = () => { return lenguajeGB.smsAvisoFG() + '*ERROR AL TRATAR DE CONVERTIR SU AUDIO A NOTA DE VOZ*'}
const smsConVN4 = () => { return lenguajeGB.smsAvisoFG() + '*ERROR AL TRATAR DE CONVERTIR SU VÍDEO A NOTA DE VOZ*'} 

//convertidores.js
const smsTradc1 = () => { return lenguajeGB.smsAvisoMG() + '*RESPONDA A UN MENSAJE DE TEXTO O ESCRIBA EL CÓDIGO Y TEXTO PARA CONVERTIR A AUDIO, EJEMPLO:*\n'}
const smsTradc2 = () => { return ' (codigo) (texto)\n'} 
const smsTradc3 = () => { return lenguajeGB.lenguaje() + ' Este texto será audio\n\n'}
const smsTradc4 = () => { return '*PUEDE OBTENER EL CÓDIGO DE LOS IDIOMAS ADMITIDOS EN:*\nhttps://cloud.google.com/translate/docs/languages?hl=es-419'} 

//config.js
const smsWait = () => { return '*Por favor espere un momento...*'}

//descargas.js
const smsMediaFr = () => { return '*_MAYOR A 150 MG ES POSIBLE QUE NO SE ENVIE_*'}
const smsImageGg = () => { return '*RESULTADO DE:*'}


//rpg-verificar.js
const smsVerify0 = (usedPrefix) => { return `${lenguajeGB['smsAvisoIIG']()}*YA ESTAS REGISTRADO(A)!!*\n*SI QUIERE ANULAR SU REGISTRO USE ESTE COMANDO*\n*${usedPrefix}unreg numero de serie*\n\n*SI NO RECUERDA SU NÚMERO DE SERIE USE ESTE COMANDO*\n*${usedPrefix}myns`}
const smsVerify1 = (usedPrefix, command) => { return `${lenguajeGB['smsAvisoIIG']()}*INGRESE SU NOMBRE Y EDAD PARA ESTAR REGISTRADO*18`}
const smsVerify2 = () => { return `${lenguajeGB['smsAvisoAG']()}*INGRESE SU NOMBRE*`}
const smsVerify3 = () => { return `${lenguajeGB['smsAvisoAG']()}*INGRESE SU EDAD*`}
const smsVerify4 = () => { return `${lenguajeGB['smsAvisoAG']()}*USTED ES MUY MAYOR*`}
const smsVerify5 = () => { return `${lenguajeGB['smsAvisoAG']()}*USTED ES MUY MENOR*`}
const smsVerify6 = () => { return `${lenguajeGB['smsAvisoAG']()}*ESCRIBA UN NOMBRE MÁS CORTO*`}
const smsVerify7 = () => { return `✅ *V E R I F I C A C I O N*`}
const smsVerify8 = (usedPrefix) => { return `*SU ID DE REGISTRO SERVIRÁ EN CASO QUE DESEE MODIFICAR O ELIMINAR SU REGISTRO USANDO ${usedPrefix}unreg*`}
const smsVerify9 = () => { return `INSIGNIA DE VERIFICACIÓN`}

//sticker-sticker.js
const smsSticker1 = (usedPrefix, command) => { return `*RESPONDER A UN VÍDEO, IMAGEN, O ESCRIBA ${usedPrefix + command} JUNTO A UN ENLACE QUE TERMINE EN .jpg .jpeg .gif .png*`}
const smsSticker2 = () => { return `*EL VÍDEO NO DEBE DE DURAR MÁS DE 10 SEGUNDOS*`}
const smsSticker3 = (usedPrefix, command) => { return `*EL ENLACE NO ES VALIDO, DEBE DE TERMINAR EN .jpg .jpeg .gif .png EJEMPLO:*\n*${usedPrefix + command} ${img}*`}

//rpg-unreg.js
const smsUnreg1 = (usedPrefix, idreg) => { return `*INGRESE SU ID DE REGISTRO. SI NO SABE CUAL ES USE EL COMANDO ${usedPrefix}${idreg}*`}
const smsUnreg2 = (usedPrefix, idreg) => { return `*SU ID DE REGISTRO NO ES CORRECTO. USE EL COMANDO ${usedPrefix}${idreg} PARA OBTENER SU ID*`}
const smsUnreg3 = (usedPrefix, regbot) => { return `*USTED ANULÓ SU REGISTRO DE* ${packname}\n\n*PUEDE USAR ${usedPrefix}${regbot} PARA REALIZAR UN NUEVO REGISTRO*`}

//rpg-myns.js
const smsIDserie = () => { return `⬇️ *ID DE REGISTRO* `}



//reiniciar 
const smsreiniciar = () => { return `*REINICIADO*`}

//config-on y off.js
const smsConfi1bot = () => { return `⚙️ *CONFIGURACIÓN* ⚙️`}
const smsConfi2bot = () => { return `COMANDO`}
const smsConfi3bot = () => { return `ESTADO`}
const smsConfi4bot = () => { return `PARA`}
const smsConfi5bot = () => { return `ACTIVADO`}
const smsConfi6bot = () => { return `DESACTIVADO`}
const smsConfi7bot = () => { return `ESTE CHAT`}

//config.js
const smsConfigBot = () => { return "SE ACTUALIZÓ 'config.js' CON ÉXITO"}

//menu-menu.js
const smsMenuTotal1 = () => { return "INFORMACIÓN DEL MENÚ"}
const smsMenuTotal2 = () => { return "SERBOT"}
const smsMenuTotal3 = () => { return "BUSCADOR / IA"}
const smsMenuTotal4 = () => { return "DESCARGAS"}
const smsMenuTotal5 = () => { return "CONVERTIDOR"}
const smsMenuTotal6 = () => { return "GRUPO ~ TODOS"}
const smsMenuTotal7 = () => { return "GRUPO ~ ADMINS"}
const smsMenuTotal8 = () => { return "EDITAR EFECTOS DE AUDIO"}
const smsMenuTotal9 = () => { return "EFECTOS DE AUDIO"}
const smsMenuTotal10 = () => { return "CONFIGURACIÓN"}
const smsMenuTotal11 = () => { return "SER VERIFICADO"}
const smsMenuTotal12 = () => { return "PROPIETARIO"}

//Error2
const smsMensError1 = () => { return `❕ REPORTAR COMANDO ❕`} 
const smsMensError2 = () => { return `Está Fallando el siguiente comando`} 

//config.js
const smsMeWait = () => { return '*ESPERE UN MOMENTO POR FAVOR...*'} 

//buscadores.js
const smsytserh1 = () => { return 'TÍTULO'} 
const smsytserh2 = () => { return 'ENLACE'} 
const smsytserh3 = () => { return 'DURACIÓN'} 
const smsytserh4 = () => { return 'SUBIDO'} 
const smsytserh5 = () => { return 'VISTAS'} 

//descargas.js
const smsIAimage = () => { return '*IMAGEN CREADA CON AI/DALL-E*'} 
const smsIAimage2 = () => { return 'Un gato de color morado con celeste estando en Júpiter, iluminando el cosmo con su encanto con un efecto minimalista.'} 
const smsIAimage3 = () => { return '*IMAGEN CREADA CON AI/Midjourney*'} 
const smsIAimage4 = () => { return 'Un león bebé, corre por el charco, se refleja en el charco, fotografía.'} 

//descargas.js
const smsyFBvid1 = () => { return '*NO ES UN ENLACE VÁLIDO, RECUERDE USAR UN ENLACE DE VÍDEO DE FACEBOOK*'} 
const smsyFBvid2 = () => { return 'VÍDEO DE GRUPO DE FACEBOOK DESCARGADO'} 
const smsyFBvid3 = () => { return 'VÍDEO DE REELS DE FACEBOOK DESCARGADO'} 
const smsyFBvid4 = () => { return 'VÍDEO DE HISTORIAS DE FACEBOOK DESCARGADO'} 
const smsyFBvid5 = () => { return 'VÍDEO DE PUBLICACIONES DE FACEBOOK DESCARGADO'} 
const smsyFBvid6 = () => { return 'VÍDEO DE FACEBOOK DESCARGADO'}

//descargas.js
const smsSP0 = (usedPrefix) => { return `_PUEDES USAR *${usedPrefix}spotifysearch* PARA OBTENER EL ENLACE DE LA CANCIÓN ESPECÍFICA_`} 
const smsSP1 = () => { return '*TITULO:*'} 
const smsSP2 = () => { return '*ARTISTA:*'} 
const smsSP3 = () => { return '*URL*:'} 
const smsSP4 = () => { return '*URL DE DESCARGA:*'} 
const smsSP5 = () => { return '*ENVIANDO CANCIÓN...*'} 
const smsSP6 = () => { return `${lenguajeGB['smsAvisoFG']()}*NO SE ENCONTRÓ RESULTADOS. INTENTE CON OTRO NOMBRE O ENLACE*`} 



export default { lenguaje, smsAvisoRG, smsprivado, smsreiniciar, smsAvisoAG, smsAvisoIIG, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCodigoQR, smsConexionOFF, smsCargando, smspurgeSession, smspurgeOldFiles, smspurgeSessionSB1, smspurgeSessionSB2, smspurgeSessionSB3, smspurgeOldFiles1, smspurgeOldFiles2, smspurgeOldFiles3, smspurgeOldFiles4, smsConMenu, smsCreA,
smsCreB, smsCreC, smsOfc1, smsOfc2, smsMensajeDonar, smsTituloDonar, smsPrivadoDonar, smsGrupoOfc1, smsGrupoOfc2, smsLisA, smsLisB, smsLisC, smsLisD, smsLisE, smsEstado1, smsEstado2, smsEstado3, smsEstado4, smsEstado5, smsEstado6, smsEstado7, smsVl1, smsVl2, smsVl3, smsVl4, smsVl5, smsVl6, smsBT1, smsBT2, smsBT3, smsBT4, smsBT5, smsBT6, smsBT7, smsBT8, smsBT9, smsYT1, smsYT2, smsYT3, smsYT4, smsYT5, smsYT6, smsYTA1, smsContacto1, smsContacto2, smsContacto3, smsContacto4, smsContacto5, smsContacto6, smsContacto7,
smsContacto8, smsYTV1, smsYTA2, smsYTV2, smsAntiView1, smsAntiView2, smsOpenai1, smsOpenai2, smsOpenai3, smsToimg, smsConURL, smsConURL1, smsConURL2, smsConURL3, smsConURL4, smsConURLERR1, smsConURLERR2,
smsConVIDEO, smsConVIDEO2, smsConVIDEO3, smsConGIF, smsConGIF2, smsConGIF3, smsConVN, smsConVN1, smsConVN2, smsConVN3, smsConVN4, smsTradc1, smsTradc2, smsTradc3, smsTradc4, smsWait, smsMediaFr, smsGI1, smsGI2, smsGI3, smsGI4, smsGI5, smsGI6, smsGI7, smsGI8, smsGI9, smsAddB3, smsAddB4, smsAddB5, smsAddB6, smsDemott, smsDemott2, smsDemott3,
smsSetW, smsSetW2, smsSetB, smsSetB2, smsDest, smsNam1, smsNam2, smsNam3, smsGrupoPP, smsGrupoPP2, smsRestGp, smskick1, smskick2, smskick3, smskick4, smsGrupoOpen, smsGrupoClose, smstagaa, smsInsGC1, smsInsGC2, smsInsGC3, smsInsGC4, smsInsGC5, smsCreApoyo, smsCreInfo, smsResP1, smsResP2, smsPropban1, smsPropban2, smsPropban3, smsPropban4, smsPropban5,
smsPropban6, smsPropban7, smsPropdesban1, smsPropdesban2, smsPropdesban3, smsPropdesban4, smsPropdesban5, smsAutoAdmin1, smsAutoAdmin2, smsUnbanCH1, smsUnbanCH2, smsUnbanCH3,
smsBioEd1, smsBioEd2, smsBioEd3, smsNameEd1, smsNameEd2, smsNameEd3, smsFotoEd1, smsFotoEd2, smsFotoEd3, smsBanChE, smsBlockUn1, smsBlockUn2, smsBlockUn3, smsRestarU1, smsRestarU2, smsRestarU3, smsJoin1, smsJoin2, smsReportGB1, smsReportGB2, smsReportGB3, smsReportGB3, smsReportGB4, smsReportGB5, smsGit1, smsGit2,
smsGit3, smsGit4, smsGit5, smsGit6, smsGit7, smsGit8, smsGit9, smsGit10, smsGit11, smsGit12, smsGit13, smsGit14, smsIniJadi, smsSoloOwnerJB, smsJBPrincipal, smsJBConexion, smsJBConexionClose, smsJBConexionTrue, smsJBConexionTrue2, smsJBConexionTrue3, smsJBCargando, smsJBDel, smsJBAdios, 
smsJBCerrarS, smsFoldErr, smsJBCom1, smsJBCom2, smsJBCom3, smsJBCom4, smsJBDifu1, smsJBDifu2, smsChatGP1, smsChatGP2, smsChatGP3, smsPlugin1, smsPlugin2,
smsPlugin3, smsPlugin4, smsPlugin5, smsPlugin6, smsJoin, smsLeave, smsPerfil0, smsPerfil1, smsPerfil2, smsPerfil3, smsPerfil4, smsPerfil5, smsVerify0, smsVerify1, smsVerify2,
smsVerify3, smsVerify4, smsVerify5, smsVerify6, smsVerify7, smsVerify8, smsVerify9, smsSticker1, smsSticker2, smsSticker3, smsUnreg1, smsUnreg2, smsUnreg3, smsIDserie,
smsBCbot1, smsBCbot2, smsBCbot3, smsBCbot4, smsBCbot5, smsBCbot6, smsBCbot7, smsBCMensaje, smsBCMensaje2, smsBCMensaje3, smsConfi1bot, smsConfi2bot, smsConfi3bot, smsConfi4bot,
smsConfi5bot, smsConfi6bot, smsConfi7bot, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner,
smsAdwa, smsEnlaceWat, smsEnlaceWatt, smsHandler, smsHandlerLlamar, smsWaMismoEnlace, smsParaAdmins, smsParaAdYOw, smsParaOw, smsNoGg, smsInt1, smsInt2, smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7,
smsCont8, smsCont9, smsCont10, smsCont11, smsAntiEliminar, smsControlAudio1, smsControlAudio2, smsControlAudio3, smsControlAudio4, smsControlAudio5, smsAudioEdit1,
smsAudioEdit2, smsAudioEdit3, smsAudioEdit4, smsAudioEdit5, smsAudioEdit6, smsAudioEdit7, smsAudioEdit8, smsAudioEdit9, smsAudioEdit10, smsAudioEdit11, smsAudioEdit12, smsAudioEdit13,
smsConfigBot, smsMenuTotal1, smsMenuTotal2, smsMenuTotal3, smsMenuTotal4, smsMenuTotal5, smsMenuTotal6, smsMenuTotal7, smsMenuTotal8, smsMenuTotal9,
smsMenuTotal10, smsMenuTotal11, smsMenuTotal12, smsMalused, smsMalused2, smsMalused3, smsMalError, smsMalError2, smsMalError3, smsMensError1, smsMensError2, smsMeWait,
smsytserh1, smsytserh2, smsytserh3, smsytserh4, smsytserh5, smsTiktok, smsIAimage, smsIAimage2, smsIAimage3, smsIAimage4, smsyFBvid1, smsyFBvid2, smsyFBvid3,
smsyFBvid4, smsyFBvid5, smsyFBvid6, smsInvite1, smsInvite2, smsInvite3, smsInvite4, smsSP0, smsSP1, smsSP2, smsSP3, smsSP4, smsSP5, smsSP6, smsAutodetec1, smsAutodetec2,
smsAutodetec3, smsAutodetec4, smsAutodetec5, smsAutodetec6, smsAutodetec7, smsImageGg }
