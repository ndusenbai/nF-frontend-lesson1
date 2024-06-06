export default function DetailsPost({ id, date, author, title, description }) {
    return (
      <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
          <div className="grid gap-8">
            <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
              <div className="space-y-4 not-prose">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">{title}</h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{date}</span>
                  </div>
                </div>
                <p1>{description}</p1>
              </div>
              <p1>{author}</p1>
            </article>
          </div>
        </div>
      </div>
    );
  }
  