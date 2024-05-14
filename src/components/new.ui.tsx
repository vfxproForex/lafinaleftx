import { addNewsAction } from "@/utlis/news.reducer";
import { useAppDispatch, useAppSelector } from "@/utlis/store";
import { useEffect } from "react";

interface IProps {
  articles: [
    {
      source: {
        id: string;
        name: string;
      };
      author: any;
      title: string;
      description: string;
      url: string;
      urlToImage: string;
      publishedAt: string;
      content: string;
    }
  ];
}

export default function NewsUI() {
  const news = useAppSelector((state) => {
    return state.news;
  });
  const dispatch = useAppDispatch();

  const testFetch = async () => {
    var url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&category=business&" +
      "apiKey=ad20ed45c1a14f4daaf912df39ac1ee3";
    var req = new Request(url);
    await fetch(req).then(async function (response) {
      const data: IProps = await response.json();
      console.log(data);
      for (let i = 0; i < data.articles.length; i++) {
        await dispatch(addNewsAction(data.articles[i]));
      }
    });
  };

  useEffect(() => {
    testFetch();
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-md text-cs_text-100 ml-5 font-bold">Current News</h1>
      <div className="flex space-x-3 w-full overflow-x-scroll">
        {news.map((x) => {
          return (
            <div
              key={x.title}
              className="rounded-lg bg-cs_bg-200 flex-none min-w-[150px] text-wrap max-w-[350px] h-[20vh] grid grid-cols-1 gap-y-5 p-3 m-4 text-cs_text-100"
            >
              <h1 className="text-md font-bold">{x.title}</h1>
              <h1>{x.publishedAt}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
