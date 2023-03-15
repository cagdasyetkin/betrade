1. npx create-next-app -e with-tailwindcss frontend
2. cd frontend
3. npm run dev
4. update pages/index.tsx
5. create .env `NEXT_PUBLIC_API_URL = 'http://127.0.0.1:8000'`
6. update package.json

```json
  "name": "frontend",
  "proxy": "http://127.0.0.1",
  "version": "0.1.0",
```

7. npm run dev
8. npm install axios
9. npm install --save-dev @types/axios
10. update pages/index.tsx to use axios to fetch data from backend

```typescript
let LiveDataHandler: any;

const Home: NextPage = () => {
  // useState and useEffect
  // get request with timeout every 5 seconds using timerIsActive and timerDuration
  const [timerIsActive, setTimerIsActive] = useState(false);
  const [timerDuration, setTimerDuration] = useState(500);
  const [data, setData] = useState([]);

  async function FetchLiveHandler() {
    try {
      const response = await axios.get("http://localhost:8000/api/dashboard");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!timerIsActive) {
      setTimerIsActive(true);
      setTimerDuration(2000);
      LiveDataHandler = setTimeout(() => {
        FetchLiveHandler();
        setTimerIsActive(false);
      }, timerDuration);
    }
  }, [timerIsActive, timerDuration, FetchLiveHandler]);

  //console.log(data);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {/** map through the data and get data.match_status property and use it in h1 tag **/}
        {data.map((item: any, index: any) => (
          <h1 key={index} className="text-6xl font-bold">
            Minute: {item.match_status}, goal_pred: {item.goal_pred}
          </h1>
        ))}
      </main>
```

11. fix CORS issue in backend

```python
MIDDLEWARE = ["corsheaders.middleware.CorsMiddleware",]
INSTALLED_APPS = ["corsheaders",]
CORS_ALLOW_ALL_ORIGINS = True
```

12. Render data in frontend

```typescript
{
  /** map through the data and get data.match_status property and use it in h1 tag **/
}
<main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
  <h1 className="text-2xl font-bold">Welcome to My Dashboard </h1>
  {data.map((item: any, index: any) => (
    <h1 key={index} className="text-2xl font-bold">
      Minute: {item.match_status}, goal_pred: {item.goal_pred}
    </h1>
  ))}
</main>;
```

13. set interval for fetching every 2 seconds using setInterval function:

```typescript
useEffect(() => {
  const interval = setInterval(() => {
    FetchLiveHandler();
  }, 2000);
  return () => clearInterval(interval);
}, []);
```

14. .env file

```env
NEXT_PUBLIC_API_URL = 'http://localhost:8000'
```

15. npm run build
