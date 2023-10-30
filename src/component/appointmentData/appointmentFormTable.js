function AppointmentTableData({ appointData }) {
  return (
    <>
      <div class="ml-5 mt-5 relative overflow-x-auto">
        <table class="m-auto text-sm text-center text-gray-500 text-gray-400 border">
          <thead class="text-xs uppercase text-white bg-blue-400">
            <tr>
              <th class="p-3">Name</th>
              <th class="p-3">Contact</th>
              <th class="p-3">Date</th>
              <th class="p-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {appointData.length &&
              appointData.map(({ name, contact, time, date }) => {
                return (
                  <tr class="bg-white">
                    <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      {name}
                    </th>
                    <td class="p-3">{contact}</td>
                    <td class="p-3">{date}</td>
                    <td class="p-3">{time}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default AppointmentTableData;
