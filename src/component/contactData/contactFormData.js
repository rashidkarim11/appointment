function ContactTableData({ contactData }) {
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
            {contactData.length &&
              contactData.map(({ name, number, email }) => {
                return (
                  <tr class="bg-white">
                    <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      {name}
                    </th>
                    <td class="p-3">{number}</td>
                    <td class="p-3">{email}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default ContactTableData;
