import { watchFile, unwatchFile } from 'fs'  
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 
import { en, es, id, ar, pt } from './lib/idiomas/total-idiomas.js' 

// ES ➜ Agregué primero el número del Bot como prioridad  
// ES ➜ Si desea recibir reportes debe de usar los tres parámetros (Número, nombre y true)
// EN ➜ Add the Bot number as priority first
// EN ➜ If you want to receive reports you must use the three parameters (Number, name and true)
global.owner = []

global.mods = [] 
global.prems = []
   
// ES ➜ Agregue el código de idioma el cual usará GataBot  
// EN ➜ Add the language code which GataBot will use
//  es = Español      id = Bahasa Indonesia       ar = عرب
//  en = English      pt = Português 
global.lenguajeGB = es  //<-- Predeterminado en idioma Español 

// ES ➜ Consigue Apikey en https://platform.openai.com/account/api-keys
global.openai_key = 'sk-0'

// ES ➜ Consigue tu ID de organizacion en: https://platform.openai.com/account/org-settings
global.openai_org_id = 'org-3'

global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = '6fbee8ec83e7b2677026ffae' //'SGWN'
global.itsrose = ['4b146102c4d500809da9d1ff']

global.APIs = { 
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',	
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',	
  rose: 'https://api.itsrose.site',
  popcat : 'https://api.popcat.xyz',
  xcoders : 'https://api-xcoders.site'
},
global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren'
}

global.mods = [] 
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

global.packname = 'ArmanBot'
global.author = 'ArmanDios'

// ES ➜ Está parte es para mostrar el contacto de alguien al usar #contacto
// EN ➜ This part is to display someone's contact using #contact
global.official = '' 
global.mail = '' //agrega tú correo
global.desc = '' //agrega una descripción corta
global.desc2 = '' //agrega una descripción larga (Solo se aplicará si su whasapp no tiene descripción)
global.country = '' //agrega tú país ejemplo: 🇪🇨

global.vs = '1.0.2'
global.vsJB = '4.0'

global.gt = 'ArmanBot'
global.yt = 'https://youtube.com/@gatadios'
global.yt2 = 'https://www.youtube.com/watch?v=Ko019wvu2Tc&t=71s'
global.ig = 'https://www.instagram.com/gata_dios'
global.md = 'https://github.com/GataNina-Li/GataBotLite-MD'
global.fb = 'https://www.facebook.com/groups/872989990425789/'

global.nna = 'https://chat.whatsapp.com/DVhu9S9Zr7cBFFl26N61U3' //UPDATE GATABOT
global.nna2 = 'https://chat.whatsapp.com/IXZ0aBryB1cHjNxe0VIm76' //Help
global.nn = 'https://chat.whatsapp.com/EnQgSZuMLFAAfWtuCBE0G3' //Grupo 1
global.nnn = 'https://chat.whatsapp.com/ImTnZ3pvmI0Dc5nQNlxVaj' //Grupo 2
global.nnnt = 'https://chat.whatsapp.com/K0UCo7igED92q9c1w2DiEH' //Grupo 3
global.nnntt = 'https://chat.whatsapp.com/HJLpWS2BDrWCPH6uAUKIRG' //Grupo 4
global.nnnttt = 'https://chat.whatsapp.com/GRLe6IF8Sec7xbJsSBFbla' //Grupo 5
global.nnnttt1 = 'https://chat.whatsapp.com/F63pQpKCsWiF2zFXxhYnky' //Grupo 6 COL
global.nnnttt2 = 'https://chat.whatsapp.com/CcJKHrxGBWAAH3PiBL07JS' //Grupo 7 COL
global.nnnttt3 = 'https://chat.whatsapp.com/KLpYFsitkgzJ15YQxZrBqO' //Grupo 8 COL
global.nnnttt4 = 'https://chat.whatsapp.com/J8HOf2T3QYeKu3UN9UBkT6' //Grupo 9 COL
global.paypal = 'https://paypal.me/OficialGD'
global.asistencia = 'Wa.me/19393844141' //Dudas? escríbeme...

global.wm = 'ArmanBot : ArmanDios'
global.igfg = '𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿'
global.wait = lenguajeGB['smsMeWait']()
global.wait2 = lenguajeGB.smsWait()
global.nomorown = owner[0]


global.imagen1 = fs.readFileSync('./media/menus/Menu3.jpg')
global.imagen2 = fs.readFileSync('./media/menus/img1.jpg')
global.imagen3 = fs.readFileSync('./media/menus/img2.jpg')
global.imagen4 = fs.readFileSync('./media/menus/img3.jpg')
global.imagen6 = fs.readFileSync('./media/menus/img5.jpg')
global.imagen7 = fs.readFileSync('./media/menus/img6.jpg')
global.imagen8 = fs.readFileSync('./media/menus/img7.jpg')
global.imagen9 = fs.readFileSync('./media/menus/img8.jpg')
global.imagen10 = fs.readFileSync('./media/menus/img9.jpg')
global.imagen11 = fs.readFileSync('./media/menus/img10.jpg')
global.imagen12 = fs.readFileSync('./media/menus/img11.jpg')
global.imagen13 = fs.readFileSync('./media/menus/img12.jpg')

global.img = '/media/menus/Menu3.jpg'
global.img2 = '/media/menus/Menu3.jpg'
global.img3 = '/media/menus/Menu3.jpg' //ft rectangular
global.img5 = '/media/menus/Menu3.jpg'
global.img6 = '/media/menus/Menu3.jpg'
global.img7 = '/media/menus/Menu3.jpg'
global.img8 = '/media/menus/Menu3.jpg'
global.img9 = '/media/menus/Menu3.jpg'
global.img10 = '/media/menus/Menu3.jpg'
global.img11 = '/media/menus/Menu3.jpg'
global.img12 = '/media/menus/Menu3.jpg'
global.img13 = '/media/menus/Menu3.jpg'
global.img14 = '/media/menus/Menu3.jpg'
global.img15 = '/media/menus/Menu3.jpg'
global.img17 = '/media/menus/Menu3.jpg'
global.img18 = '/media/menus/Menu3.jpg'
global.img19 = '/media/menus/Menu3.jpg'
global.img20 = '/media/menus/Menu3.jpg'
global.img21 = '/media/menus/Menu3.jpg'
global.img21 = '/media/menus/Menu3.jpg' //paypal

global.welgata = [img]
global.redesMenu = [img]
global.gataMenu = [img]


global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'
global.htjava = '⫹⫺'
global.correct = '✅'
global.fault = '💔'
global.alert = '⚠️'
global.sending = '📋'
global.sent = '❇️'
global.notsent = '❗'
global.waitemot = '⌛'
global.waitemot2 = '⏳'

global.multiplier = 60 // Cuanto más alto, más difícil subir de nivel 

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.bold.greenBright(lenguajeGB['smsConfigBot']().trim()))
import(`${file}?update=${Date.now()}`)
})
