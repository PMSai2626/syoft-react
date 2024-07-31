
const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user); // Log user object to inspect its contents

  if (!user) {
    return <div className="flex items-center justify-center min-h-screen text-xl text-red-500">Please log in to view the dashboard.</div>;
  }

  // Render content with user data
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Welcome to Your Dashboard, {user.user_firstname}!</h1>
          <p className="text-lg mt-2">Here's what's happening with your account.</p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mt-8 max-w-6xl w-full bg-white rounded-lg shadow-md p-6">
        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-bold mb-2">Welcome Message</h2>
          <p className="text-lg">Welcome, {user.user_firstname}! We're glad to have you here.</p>
        </div>

        {/* Activity Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Recent Activity</h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-2">
              <p className="text-lg"><strong>Activity 1:</strong> Checked your latest messages.</p>
            </li>
            <li className="py-2">
              <p className="text-lg"><strong>Activity 2:</strong> Updated your profile information.</p>
            </li>
            <li className="py-2">
              <p className="text-lg"><strong>Activity 3:</strong> Posted a new update on your timeline.</p>
            </li>
          </ul>
        </div>
      </div>

     
    </div>
  );
};

export default Dashboard;
