export default function About() {
  return (
    <div>
      <h1 className='text-6xl mb-4'>GitHub Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a href='https://www.meetxb.com/projects#item2'> Portfolio</a> by
        <strong>
          <a href='https://github.com/lookingforcharlie'> Charlie Feng</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout Framework:
        <a
          className='text-white'
          href='https://tailwindcss.com/docs/guides/create-react-app'
        >
          {' '}
          Tailwind CSS
        </a>
      </p>
    </div>
  );
}
