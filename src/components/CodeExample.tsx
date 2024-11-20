import React from 'react';

const CodeExample = () => {
  const code = `from masonite.routes import Route

Route.get('/', 'WelcomeController@show').name('home')
Route.post('/contact', 'ContactController@store')
Route.group(['middleware' => ['auth']], [
    Route.get('/dashboard', 'DashboardController@show'),
    Route.resource('/posts', 'PostController')
])`;

  return (
    <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg text-sm overflow-x-auto">
      <code>{code}</code>
    </pre>
  );
};

export default CodeExample;