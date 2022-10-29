import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Card } from "./Card";

export const Main = () => (
  <Box w={"100%"} h={"fit-content"} py={5} px={"20vw"}>
    <Grid templateColumns="repeat(4, 1fr)" gap={4}>
      {data.map((item, index) => (
        <GridItem key={index}>
          <Card {...item} />
        </GridItem>
      ))}
    </Grid>
  </Box>
);

const data = [
  {
    id: "gCo8Pwz47OM",
    createdAt: "2022-10-29T19:29:41.890Z",
    updatedAt: "2022-10-29T19:29:41.890Z",
    title: "MAKING SNAPCHATS MID GAME 📷 #valorant",
    description:
      "Thank you for watching the video. If you enjoyed the video feel free to subscribe and turn on post notifications. Also, be sure to ...",
    publishedAt: "2022-10-29T19:12:35.000Z",
    channelTitle: "temet",
    thumbnailUrl: "https://i.ytimg.com/vi/gCo8Pwz47OM/hqdefault.jpg",
  },
  {
    id: "Mv-K5qmFBM8",
    createdAt: "2022-10-29T19:29:41.890Z",
    updatedAt: "2022-10-29T19:29:41.890Z",
    title: "#shorts el de los gustos raros #valorant",
    description: "shorts #valorant #valorantclips.",
    publishedAt: "2022-10-29T19:04:35.000Z",
    channelTitle: "Honor CN",
    thumbnailUrl: "https://i.ytimg.com/vi/Mv-K5qmFBM8/hqdefault.jpg",
  },
  {
    id: "jyuhzKFrqlY",
    createdAt: "2022-10-29T19:26:57.592Z",
    updatedAt: "2022-10-29T19:26:57.592Z",
    title:
      "Post-Planting Wall in Haven B Site | Sage&#39;s GUIDE #valorant #shorts",
    description: "",
    publishedAt: "2022-10-29T19:00:30.000Z",
    channelTitle: "Leggende Improvvisate",
    thumbnailUrl: "https://i.ytimg.com/vi/jyuhzKFrqlY/hqdefault.jpg",
  },
  {
    id: "OM0Bkxv2ggU",
    createdAt: "2022-10-29T19:29:41.890Z",
    updatedAt: "2022-10-29T19:29:41.890Z",
    title: "The Most Insane Shot in Valorant",
    description:
      "Tarik witnesses the bet valorant shot in history Valorant has been gaining a lot of attention recently from the release of the New ...",
    publishedAt: "2022-10-29T19:00:16.000Z",
    channelTitle: "Valorant House",
    thumbnailUrl: "https://i.ytimg.com/vi/OM0Bkxv2ggU/hqdefault.jpg",
  },
  {
    id: "xTm9OlGscWE",
    createdAt: "2022-10-29T19:26:57.592Z",
    updatedAt: "2022-10-29T19:26:57.592Z",
    title: "DAMN 4K | #shorts #valorant #indonesia #valorantclips",
    description:
      "Tiktok : @Ferrysinaga61 HELB ME 250 ZABS Ignore Hastags : #shorts #valorant #indonesia #144hz #60fps #valorantclips ...",
    publishedAt: "2022-10-29T18:47:59.000Z",
    channelTitle: "FerrySinaga",
    thumbnailUrl: "https://i.ytimg.com/vi/xTm9OlGscWE/hqdefault.jpg",
  },
  {
    id: "YcgT4AJN5a4",
    createdAt: "2022-10-29T19:26:57.592Z",
    updatedAt: "2022-10-29T19:26:57.592Z",
    title: "Omen #54 || Valorant || #shorts",
    description:
      "In this #shorts video I played as Omen in Valorant . Valorant is a tactical shooting game involving two teams with 5 players in each ...",
    publishedAt: "2022-10-29T18:45:02.000Z",
    channelTitle: "NotS",
    thumbnailUrl: "https://i.ytimg.com/vi/YcgT4AJN5a4/hqdefault.jpg",
  },
  {
    id: "djbDvDXZSaQ",
    createdAt: "2022-10-29T19:26:57.592Z",
    updatedAt: "2022-10-29T19:26:57.592Z",
    title: "Valorant - Prod",
    description: "",
    publishedAt: "2022-10-29T18:36:23.000Z",
    channelTitle: "Valorant Vision",
    thumbnailUrl: "https://i.ytimg.com/vi/djbDvDXZSaQ/hqdefault.jpg",
  },
  {
    id: "wU1eVUxHJ2c",
    createdAt: "2022-10-29T19:26:57.592Z",
    updatedAt: "2022-10-29T19:26:57.592Z",
    title:
      "#shorts #valorant kill core from yoru watch end #funny #moments  #ashgre",
    description: "shorts #valorant #funny #moments #sage #valorantshorts.",
    publishedAt: "2022-10-29T18:30:56.000Z",
    channelTitle: "AshGre",
    thumbnailUrl: "https://i.ytimg.com/vi/wU1eVUxHJ2c/hqdefault.jpg",
  },
  {
    id: "EVQ0haGsQjM",
    createdAt: "2022-10-29T19:26:57.592Z",
    updatedAt: "2022-10-29T19:26:57.592Z",
    title: "Never loose hope.......... #shorts #valorant #valorantclips",
    description:
      "shorts #valorant #valorantclips #valorantclip #valorantph #whattoplay #riotgames #leagueoflegends #gaming #streamer ...",
    publishedAt: "2022-10-29T18:30:13.000Z",
    channelTitle: "FleXGuy",
    thumbnailUrl: "https://i.ytimg.com/vi/EVQ0haGsQjM/hqdefault.jpg",
  },
  {
    id: "Wn8NeXE1_lI",
    createdAt: "2022-10-29T19:26:57.592Z",
    updatedAt: "2022-10-29T19:26:57.592Z",
    title: "VALORANT FUNNY MOVEMENTS #shorts",
    description:
      "valorant funny moments streamer valorant funny moments protatomonster valorant funny moments compilation valorant funny ...",
    publishedAt: "2022-10-29T18:22:50.000Z",
    channelTitle: "ChakLota",
    thumbnailUrl: "https://i.ytimg.com/vi/Wn8NeXE1_lI/hqdefault.jpg",
  },
  {
    id: "5tgK5eEIXpc",
    createdAt: "2022-10-29T19:29:41.890Z",
    updatedAt: "2022-10-29T19:29:41.890Z",
    title: "CHILLING WITH VALORANT KAH?",
    description:
      "Hello Brother and Sister! Yang mau donasi bisa ke sini! https://saweria.co/riodjaja Mabar sama pejuang malam! Subscribe ...",
    publishedAt: "2022-10-29T18:20:19.000Z",
    channelTitle: "Rio Djaja",
    thumbnailUrl: "https://i.ytimg.com/vi/5tgK5eEIXpc/hqdefault.jpg",
  },
  {
    id: "rSpMk0yTKbo",
    createdAt: "2022-10-29T19:26:57.592Z",
    updatedAt: "2022-10-29T19:26:57.592Z",
    title: "VALORANT FUNNY MOVEMENTS #shorts",
    description:
      "valorant funny moments streamer valorant funny moments protatomonster valorant funny moments compilation valorant funny ...",
    publishedAt: "2022-10-29T18:18:47.000Z",
    channelTitle: "ChakLota",
    thumbnailUrl: "https://i.ytimg.com/vi/rSpMk0yTKbo/hqdefault.jpg",
  },
  {
    id: "SUfmhQuTiOc",
    createdAt: "2022-10-29T19:26:57.592Z",
    updatedAt: "2022-10-29T19:26:57.592Z",
    title: "VALORANT FUNNY MOVEMENTS #shorts",
    description:
      "valorant funny moments streamer valorant funny moments protatomonster valorant funny moments compilation valorant funny ...",
    publishedAt: "2022-10-29T18:18:06.000Z",
    channelTitle: "ChakLota",
    thumbnailUrl: "https://i.ytimg.com/vi/SUfmhQuTiOc/hqdefault.jpg",
  },
  {
    id: "GCzBMeU5Yb8",
    createdAt: "2022-10-29T19:26:57.592Z",
    updatedAt: "2022-10-29T19:26:57.592Z",
    title:
      "TREMENDO FIUMBAAA #11 #valorant #valoranthighlights #humor #valorantshorts #senseixt24",
    description:
      "Únete a este canal para acceder a sus beneficios: https://www.youtube.com/channel/UCguJ9wfEHko00ol4pFtB-pA/join #valorant ...",
    publishedAt: "2022-10-29T18:12:21.000Z",
    channelTitle: "SenseiXT24",
    thumbnailUrl: "https://i.ytimg.com/vi/GCzBMeU5Yb8/hqdefault.jpg",
  },
  {
    id: "FhN9QT8t9Qw",
    createdAt: "2022-10-29T19:26:57.592Z",
    updatedAt: "2022-10-29T19:26:57.592Z",
    title: "Valorant Tips to win matches",
    description:
      "Subscribe for more✨✨ #valorant #valorantclip #valorantgaming #valorantgaming #valorantfunny #valorantph #valoranttips ...",
    publishedAt: "2022-10-29T18:10:55.000Z",
    channelTitle: "GamingHub_network",
    thumbnailUrl: "https://i.ytimg.com/vi/FhN9QT8t9Qw/hqdefault.jpg",
  },
  {
    id: "ggaoM1xSYgA",
    createdAt: "2022-10-29T19:26:57.592Z",
    updatedAt: "2022-10-29T19:26:57.592Z",
    title: "EL HACK MÁS RARO DE VALORANT | CAZANDO HACKERS EN VALORANT #13",
    description:
      "Twitch: http://www.twitch.tv/blackelespanolito ▻ Discord del canal: https://discord.gg/thK2ZzZbG8 ▻ Los mejores cascos son de ...",
    publishedAt: "2022-10-29T18:00:20.000Z",
    channelTitle: "Black Valorant en Español",
    thumbnailUrl: "https://i.ytimg.com/vi/ggaoM1xSYgA/hqdefault.jpg",
  },
  {
    id: "tE4h9C0J1G4",
    createdAt: "2022-10-29T19:26:57.592Z",
    updatedAt: "2022-10-29T19:26:57.592Z",
    title: "My sniping skills in valorant are op #shorts #valorant #deathmatch",
    description:
      "Like & Subscribe to the channel! Ring the bell to never miss my uploads! Animations & Designs: https://youtube.com/arialfx ...",
    publishedAt: "2022-10-29T17:56:19.000Z",
    channelTitle: "Deadshot Killer",
    thumbnailUrl: "https://i.ytimg.com/vi/tE4h9C0J1G4/hqdefault.jpg",
  },
  {
    id: "mVqC14ttRNo",
    createdAt: "2022-10-29T19:26:57.592Z",
    updatedAt: "2022-10-29T19:26:57.592Z",
    title: "So I matched against 4 PROS in VALORANT RANKED... | SEN tarik",
    description:
      "Tarik is back on the VALORANT ranked grind. Today Tarik matches against 4 VALORANT pros and seems confident that he can ...",
    publishedAt: "2022-10-29T17:48:42.000Z",
    channelTitle: "tarik",
    thumbnailUrl: "https://i.ytimg.com/vi/mVqC14ttRNo/hqdefault.jpg",
  },
  {
    id: "FIznBGli06w",
    createdAt: "2022-10-29T19:26:57.592Z",
    updatedAt: "2022-10-29T19:26:57.592Z",
    title:
      "Reyna Uninstalled After This pt2 #valorant #valoranthighlights  #shorts",
    description:
      "Subscribe and turn on post notifications to be up to date on all my shorts! Drop a LIKE for MORE Valorant Gameplay videos!",
    publishedAt: "2022-10-29T17:42:45.000Z",
    channelTitle: "Corny Zeke",
    thumbnailUrl: "https://i.ytimg.com/vi/FIznBGli06w/hqdefault.jpg",
  },
  {
    id: "qBHfDrW-bJ4",
    createdAt: "2022-10-29T19:26:57.592Z",
    updatedAt: "2022-10-29T19:26:57.592Z",
    title:
      "TROLLING AND BREAKING VALORANT WITH AHK (SERVER LAG, FPS DROPS, &amp; MORE)",
    description:
      "I have been playing Valorant and abusing swapping abilities to lag my teammates and servers. I have enough for a part two so ...",
    publishedAt: "2022-10-29T17:30:09.000Z",
    channelTitle: "noob dog",
    thumbnailUrl: "https://i.ytimg.com/vi/qBHfDrW-bJ4/hqdefault.jpg",
  },
];
