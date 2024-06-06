import Link from 'next/link';
import Post from './components/common/post';
import data from './data/data.json';


export default function Home() {
  return (
    <div>
      <div className="flex justify-center p-2">
        <p className="text-3xl">Home Page</p>
      </div>
      <div>
        {data.map((item, index) => (
          <Link href={`/${item.id}`} key={index}>
            <Post
              id={item.id}
              date={item.date}
              author={item.author}
              title={item.title}
              description={item.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
