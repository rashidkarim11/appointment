function Header() {
  return (
    <header class="bg-blue-500 p-4">
      <div class="container mx-auto flex items-center justify-between">
        <a href="/" class="text-white text-2xl font-bold">
          Mr.Doctor
        </a>

        <nav class="space-x-4">
          <a href="/contact" class="text-white hover:text-gray-300">
            Add Contact
          </a>
          <a href="/" class="text-white hover:text-gray-300">
            Add Appointment
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
