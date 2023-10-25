function AppointmentData() {
    return (
      <>
        <div class="ml-5 mt-5 relative overflow-x-auto">
          <table class="text-sm text-center text-gray-500 text-gray-400 border">
            <thead class="text-xs uppercase text-gray-400 bg-gray-700">
              <tr>
                <th class="p-3">Name</th>
                <th class="p-3">Email</th>
                <th class="p-3">Number</th>
                <th class="p-3">Date & Time</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Maira
                </th>
                <td class="p-3">maira@gmail.com</td>
                <td class="p-3">67894456778</td>
                <td class="p-3">sun 4pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
  export default AppointmentData;
  