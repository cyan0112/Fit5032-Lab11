<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a href="/Home" class="nav-link" :class="{ active: $route.path === '/Home' }" aria-current="page">Home (Week 4)</a>
        </li>
        <li class="nav-item">
          <a href="/" class="nav-link" :class="{ active: $route.path === '/' }">About</a>
        </li>
        <li class="nav-item">
          <a href="/ContactUs" class="nav-link" :class="{ active: $route.path === '/ContactUs' }">Contact us</a>
        </li>
        <li class="nav-item">
          <a href="/WeatherCheck" class="nav-link" :class="{ active: $route.path === '/WeatherCheck' }">WeatherCheck</a>
        </li>
        <li class="nav-item">
          <a href="/FireLogin" class="nav-link" :class="{ active: $route.path === '/FireLogin' }">FireLogin</a>
        </li>
        <li class="nav-item">
          <a href="/FireRegister" class="nav-link" :class="{ active: $route.path === '/FireRegister' }">FireRegister</a>
        </li>
        <li class="nav-item">
          <a href="/CountBook" class="nav-link" :class="{ active: $route.path === '/CountBook' }">Count Book API</a>
        </li>
        <li class="nav-item">
          <a href="/GetAllBookApi" class="nav-link" :class="{ active: $route.path === '/GetAllBookApi' }">Count All Book Api</a>
        </li>
      </ul>
    </header>
  </div>
</template>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
