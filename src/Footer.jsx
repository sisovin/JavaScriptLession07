function Footer() {
  /* /////////////////////////////////////////////// */
  // Footer year
  const year = document.getElementById('year');
  const currentYear = new Date().getFullYear();
  year.setAttribute('daretime', currentYear.toString());
  year.setAttribute('datetime', currentYear.toString());
  year.textContent = currentYear.toString();
  /* /////////////////////////////////////////////////// */
  return (
    <footer>
      <div class="p-4 flex flex-col items-start justify-start mt-4 rounded-lg shadow border-2 border-gray-700 dark:border-gray-800 bg-gray-700 dark:bg-gray-800">
        <p class="font-bold hidden">Footer</p>
        <p class="text-right">
          Copyright &copy; <span class="text-red-500" id="year"></span>
        </p>
        <p class="text-right">All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
