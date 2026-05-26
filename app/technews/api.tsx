// Define and export the Article type
export type Article = {
  title: string;
  link: string;
  source_id?: string;
  creator?: string[];
  pubDate?: string;
};



export async function fetchTechNews(): Promise<{
  articles: Article[];
  loading: boolean;
  apiSuccess: boolean;
}> {
  const apiKey = process.env.TechNews_API_KEY;

  console.log(apiKey);

  try {
    const response = await fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&q=tech%20news&country=us&category=technology`
, {
      cache: "no-store",
    });

    if (!response.ok) {
      return { articles: [], loading: false, apiSuccess: false };
    }

    const data = await response.json();
    const articles = Array.isArray(data.results) ? data.results : [];
    const apiSuccess = articles.length > 0;

    return { articles, loading: false, apiSuccess };
  } catch (error) {
    return { articles: [], loading: false, apiSuccess: false };
  }
}
