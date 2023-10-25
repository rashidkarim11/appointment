function ContactTableData() {
  return (
    <>
      <div class="ml-5 mt-5 relative overflow-x-auto">
        <table class="m-auto text-sm text-center text-gray-500 text-gray-400 border">
          <thead class="text-xs uppercase text-white bg-blue-400">
            <tr>
              <th class="p-3">Name</th>
              <th class="p-3">Number</th>
              <th class="p-3">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white">
              <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Umer
              </th>
              <td class="p-3">81927454</td>
              <td class="p-3">umerrizwan2023@gmail.com</td>
            </tr>
            <tr class="bg-white">
              <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Hassan
              </th>
              <td class="p-3">9182635382</td>
              <td class="p-3">hassan@gmail.com</td>
            </tr>
            <tr class="bg-white">
              <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                Rashid
              </th>
              <td class="p-3">1722538213</td>
              <td class="p-3">rashid@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default ContactTableData;
