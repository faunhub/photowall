// No storage check. This executes immediately on every page load/refresh.
const password = prompt("are you beola what is the password");

if (password === "phanh123") {
  // Access granted, script continues to load the site
  console.log("oke");
} else {
  // If wrong or cancelled, keep reloading to block access
  alert("what the helly");
  window.location.reload(); 
}

