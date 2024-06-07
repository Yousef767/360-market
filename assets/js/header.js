let header = document.querySelector(".sidebar-wrapper");
header.innerHTML = `
<ul class="metismenu" id="menu">
  <li id="index">
    <a href="index.html" >
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.409 9.56894L21.4075 9.56743L12.4324 0.593506C12.0498 0.210815 11.5412 0 11.0001 0C10.4591 0 9.95048 0.210648 9.56775 0.593338L0.597282 9.56273C0.59426 9.56575 0.591239 9.56894 0.588217 9.57196C-0.197385 10.362 -0.196042 11.6439 0.592078 12.4319C0.952146 12.7921 1.4277 13.0007 1.93616 13.0226C1.95681 13.0246 1.97763 13.0256 1.99861 13.0256H2.35633V19.6298C2.35633 20.9367 3.41974 22 4.72707 22H8.23844C8.59431 22 8.88304 21.7115 8.88304 21.3555V16.1777C8.88304 15.5814 9.36817 15.0963 9.96459 15.0963H12.0357C12.6321 15.0963 13.1172 15.5814 13.1172 16.1777V21.3555C13.1172 21.7115 13.4058 22 13.7618 22H17.2732C18.5805 22 19.6439 20.9367 19.6439 19.6298V13.0256H19.9756C20.5165 13.0256 21.0251 12.8149 21.408 12.4322C22.197 11.6429 22.1973 10.3588 21.409 9.56894Z" fill="#757A89"/>
</svg>

<div class="menu-title">Dashboard</div>
    </a>
  </li>
  <li>
    <a href="timeline.html" >
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.3998 12.0984C5.00732 12.0984 5.4998 11.606 5.4998 10.9984C5.4998 10.3909 5.00732 9.89844 4.3998 9.89844C3.79229 9.89844 3.2998 10.3909 3.2998 10.9984C3.2998 11.606 3.79229 12.0984 4.3998 12.0984Z" fill="#757A89"/>
    <path d="M8.79971 12.0984C9.40722 12.0984 9.89971 11.606 9.89971 10.9984C9.89971 10.3909 9.40722 9.89844 8.79971 9.89844C8.19219 9.89844 7.69971 10.3909 7.69971 10.9984C7.69971 11.606 8.19219 12.0984 8.79971 12.0984Z" fill="#757A89"/>
    <path d="M13.1996 12.0984C13.8071 12.0984 14.2996 11.606 14.2996 10.9984C14.2996 10.3909 13.8071 9.89844 13.1996 9.89844C12.5921 9.89844 12.0996 10.3909 12.0996 10.9984C12.0996 11.606 12.5921 12.0984 13.1996 12.0984Z" fill="#757A89"/>
    <path d="M17.6 12.0984C18.2075 12.0984 18.7 11.606 18.7 10.9984C18.7 10.3909 18.2075 9.89844 17.6 9.89844C16.9925 9.89844 16.5 10.3909 16.5 10.9984C16.5 11.606 16.9925 12.0984 17.6 12.0984Z" fill="#757A89"/>
    <path d="M1.46673 6.96645H2.67306L3.9564 8.24979C4.20206 8.49545 4.59806 8.49545 4.84373 8.24979L6.12706 6.96645H7.3334C7.73673 6.96645 8.06673 6.63645 8.06673 6.23312V1.10052C8.06673 0.697187 7.73673 0.367188 7.3334 0.367188H1.46673C1.0634 0.367188 0.733398 0.697187 0.733398 1.10052V6.23312C0.733398 6.63645 1.0634 6.96645 1.46673 6.96645Z" fill="#757A89"/>
    <path d="M10.267 6.96645H11.4734L12.7567 8.24979C13.0024 8.49545 13.3984 8.49545 13.644 8.24979L14.9274 6.96645H16.1337C16.537 6.96645 16.867 6.63645 16.867 6.23312V1.10052C16.867 0.697187 16.537 0.367188 16.1337 0.367188H10.267C9.86369 0.367188 9.53369 0.697187 9.53369 1.10052V6.23312C9.53369 6.63645 9.86369 6.96645 10.267 6.96645Z" fill="#757A89"/>
    <path d="M5.1333 15.7712V20.9038C5.1333 21.3072 5.4633 21.6372 5.86663 21.6372H11.7333C12.1366 21.6372 12.4666 21.3072 12.4666 20.9038V15.7712C12.4666 15.3679 12.1366 15.0379 11.7333 15.0379H10.527L9.24363 13.7546C8.99797 13.5089 8.60197 13.5089 8.3563 13.7546L7.07297 15.0379H5.86663C5.4633 15.0379 5.1333 15.3679 5.1333 15.7712Z" fill="#757A89"/>
    <path d="M21.2664 20.9038V15.7712C21.2664 15.3679 20.9364 15.0379 20.5331 15.0379H19.3268L18.0434 13.7546C17.7978 13.5089 17.4018 13.5089 17.1561 13.7546L15.8728 15.0379H14.6664C14.2631 15.0379 13.9331 15.3679 13.9331 15.7712V20.9038C13.9331 21.3072 14.2631 21.6372 14.6664 21.6372H20.5331C20.9364 21.6372 21.2664 21.3072 21.2664 20.9038Z" fill="#757A89"/>
    <path d="M2.56667 10.9995C2.56667 10.8748 2.57767 10.7501 2.60333 10.6328H0.366667C0.165 10.6328 0 10.7978 0 10.9995C0 11.2011 0.165 11.3661 0.366667 11.3661H2.60333C2.57767 11.2488 2.56667 11.1241 2.56667 10.9995Z" fill="#757A89"/>
    <path d="M7.00296 11.3661C6.97729 11.2488 6.96629 11.1241 6.96629 10.9995C6.96629 10.8748 6.97729 10.7501 7.00296 10.6328H6.19629C6.22196 10.7501 6.23296 10.8748 6.23296 10.9995C6.23296 11.1241 6.22196 11.2488 6.19629 11.3661H7.00296Z" fill="#757A89"/>
    <path d="M11.4033 11.3661C11.3777 11.2488 11.3667 11.1241 11.3667 10.9995C11.3667 10.8748 11.3777 10.7501 11.4033 10.6328H10.5967C10.6223 10.7501 10.6333 10.8748 10.6333 10.9995C10.6333 11.1241 10.6223 11.2488 10.5967 11.3661H11.4033Z" fill="#757A89"/>
    <path d="M15.8032 11.3661C15.7776 11.2488 15.7666 11.1241 15.7666 10.9995C15.7666 10.8748 15.7776 10.7501 15.8032 10.6328H14.9966C15.0222 10.7501 15.0332 10.8748 15.0332 10.9995C15.0332 11.1241 15.0222 11.2488 14.9966 11.3661H15.8032Z" fill="#757A89"/>
    <path d="M21.6332 10.6328H19.3965C19.4222 10.7501 19.4332 10.8748 19.4332 10.9995C19.4332 11.1241 19.4222 11.2488 19.3965 11.3661H21.6332C21.8348 11.3661 21.9998 11.2011 21.9998 10.9995C21.9998 10.7978 21.8348 10.6328 21.6332 10.6328Z" fill="#757A89"/>
    </svg>
    
    <div class="menu-title">Timeline</div>
    </a>
  </li>
  <li id="representative">
    <a href="./representative.html" >
    <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.4067 16.3281H6.59182C2.89532 16.6658 0 19.7733 0 23.5582C0 27.1736 2.64153 27.3511 6.10096 27.3511C6.47845 27.3511 6.86537 27.3492 7.2611 27.3492H14.7392C15.1322 27.3492 15.52 27.3511 15.8975 27.3511C19.3569 27.3511 22 27.1739 22 23.5582C21.9988 19.773 19.1032 16.6652 15.4067 16.3281Z" fill="#757A89"/>
<path d="M12.3344 12.6021H13.4456C13.8118 12.6021 14.1601 12.7267 14.4407 12.9486C15.0802 12.8629 15.6841 12.6966 16.2075 12.4702C16.3585 12.2465 16.4898 12.0088 16.6108 11.7654V9.33355C16.6108 8.78372 16.8154 8.27159 17.17 7.88133C16.6518 4.93951 14.0896 2.70312 10.9992 2.70312C7.90964 2.70312 5.34683 4.93981 4.82861 7.88163C5.18301 8.27159 5.38786 8.78372 5.38786 9.33355V11.7654C6.41548 13.8279 8.5391 15.2479 10.9989 15.2479C11.0372 15.2479 11.0743 15.243 11.1122 15.2421C10.8749 14.9616 10.7259 14.6042 10.7259 14.209C10.7262 13.323 11.4478 12.6021 12.3344 12.6021Z" fill="#757A89"/>
<path d="M3.15167 13.5159H3.22188C3.99266 13.5159 4.61817 12.8903 4.61817 12.1168V9.32606C4.61817 8.77775 4.30177 8.30543 3.8413 8.07656C4.04038 4.30013 7.1746 1.28961 10.9994 1.28961C14.8241 1.28961 17.9596 4.29982 18.158 8.07656C17.6976 8.30513 17.3815 8.77775 17.3815 9.32606V12.1168C17.3815 12.3022 17.4176 12.4749 17.4809 12.6366C16.6666 13.218 15.4822 13.6332 14.1482 13.7481C13.9971 13.5186 13.7397 13.3651 13.4455 13.3651H12.3343C11.8711 13.3651 11.4966 13.7402 11.4966 14.2015C11.4966 14.6635 11.8708 15.0392 12.3343 15.0392H13.4455C13.7692 15.0392 14.0451 14.8547 14.1843 14.5872C15.7332 14.4651 17.08 13.9921 18.0261 13.2928C18.2428 13.4332 18.5 13.5155 18.7775 13.5155H18.8474C19.6191 13.5155 20.2434 12.89 20.2434 12.1165V9.32575C20.2434 8.76985 19.9175 8.28993 19.4473 8.06714C19.2425 3.58587 15.532 0 10.9997 0C6.46733 0 2.75624 3.58587 2.55291 8.06775C2.08211 8.29023 1.75537 8.77046 1.75537 9.32636V12.1171C1.75537 12.8903 2.38148 13.5159 3.15167 13.5159Z" fill="#757A89"/>
</svg>

<div class="menu-title">Representative</div>
    </a>
  </li>
  <li>
    <a href="javascript:;" class="has-arrow">
      
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.7596 -0.0078125H2.24032C1.64615 -0.0078125 1.07632 0.228221 0.656175 0.648362C0.236033 1.0685 0 1.63834 0 2.23251V19.7668C0 20.3609 0.236033 20.9308 0.656175 21.3509C1.07632 21.771 1.64615 22.0071 2.24032 22.0071H19.7596C20.3538 22.0071 20.9236 21.771 21.3438 21.3509C21.7639 20.9308 22 20.3609 22 19.7668V2.24744C22.0019 1.95199 21.9454 1.65906 21.8337 1.38552C21.722 1.11199 21.5573 0.863252 21.3491 0.653634C21.1409 0.444016 20.8932 0.277659 20.6204 0.164139C20.3476 0.0506197 20.0551 -0.00781907 19.7596 -0.0078125ZM6.9562 20.9018H2.24032C1.94324 20.9018 1.65832 20.7838 1.44825 20.5738C1.23818 20.3637 1.12016 20.0788 1.12016 19.7817V17.8401H6.9562V20.9018ZM6.9562 16.7199H1.10522V13.6581H6.9562V16.7199ZM6.9562 12.538H1.10522V9.47621H6.9562V12.538ZM6.9562 8.35605H1.10522V5.29428H6.9562V8.35605ZM13.9236 20.9018H8.07636V17.8401H13.9236V20.9018ZM13.9236 16.7199H8.07636V13.6581H13.9236V16.7199ZM13.9236 12.538H8.07636V9.47621H13.9236V12.538ZM13.9236 8.35605H8.07636V5.29428H13.9236V8.35605ZM20.8947 19.7668C20.8947 20.0638 20.7767 20.3488 20.5666 20.5588C20.3566 20.7689 20.0716 20.8869 19.7746 20.8869H15.0438V17.8401H20.8947V19.7668ZM20.8947 16.7199H15.0438V13.6581H20.8947V16.7199ZM20.8947 12.538H15.0438V9.47621H20.8947V12.538ZM20.8947 8.35605H15.0438V5.29428H20.8947V8.35605Z" fill="#757A89"/>
    </svg>
    
    <div class="menu-title">Table</div>
    </a>
    <ul>
      <li> <a href="customers-census.html"><i class='bx bx-radio-circle'></i>Customers Census</a></li>
      <li> <a href="assign-customer-to-user.html"><i class='bx bx-radio-circle'></i>Assigne customer to user</a></li>
      <li> <a href="##"><i class='bx bx-radio-circle'></i>Matching Data</a></li><li>
    </ul>
  </li>	
  <li>
    <a href="javascript:;" class="has-arrow">
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.4883 10.3516C15.0008 10.3516 12.9766 12.3758 12.9766 14.8633C12.9766 15.8131 13.2693 16.722 13.8307 17.5018L16.9728 21.738C17.0943 21.9004 17.2856 21.9961 17.4883 21.9961H17.4889C17.6916 21.9961 17.8829 21.8998 18.0044 21.7374L21.2737 17.3155C21.7489 16.5854 22 15.7375 22 14.8633C22 12.3758 19.9758 10.3516 17.4883 10.3516ZM17.4883 16.7969C16.4221 16.7969 15.5547 15.9295 15.5547 14.8633C15.5547 13.7971 16.4221 12.9297 17.4883 12.9297C18.5545 12.9297 19.4219 13.7971 19.4219 14.8633C19.4219 15.9295 18.5545 16.7969 17.4883 16.7969Z" fill="#757A89"/>
    <path d="M0.97625 0.0995271C0.776703 -0.0194534 0.529375 -0.0231917 0.326691 0.091363C0.124609 0.205875 0 0.419902 0 0.652148V13.5857C0 13.8123 0.11898 14.0219 0.312813 14.1384L6.48828 17.8178V3.38109L0.97625 0.0995271Z" fill="#757A89"/>
    <path d="M20.3981 3.96096L14.2656 0.28125V10.0502C15.1882 9.43127 16.2962 9.06827 17.4883 9.06827C18.6803 9.06827 19.7884 9.43127 20.7109 10.0502V4.51359C20.7109 4.28701 20.592 4.07741 20.3981 3.96096Z" fill="#757A89"/>
    <path d="M12.9766 0.28125L7.77734 3.37526V17.8121L11.734 15.4639C11.7136 15.2663 11.6875 15.0697 11.6875 14.869C11.6875 13.5019 12.1825 12.2605 12.9766 11.268V0.28125Z" fill="#757A89"/>
    </svg>
    
    <div class="menu-title">Map</div>
    </a>
    <ul>
      <li> <a href="showing-data-with-filter.html"><i class='bx bx-radio-circle'></i>Showing Data With Filters</a>
      </li>
      <li> <a href="##"><i class='bx bx-radio-circle'></i>Assigne customer to reps</a>
      </li>
      <li> <a href="##"><i class='bx bx-radio-circle'></i>Check Box to highlight the customer if served</a>
      </li>
    </ul>
  </li>	
  <li>
    <a href="javascript:;" class="has-arrow">
    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3467 4.8574H6.35424C5.68995 4.8574 5.15088 4.31833 5.15088 3.65405V1.82055C5.15088 1.15626 5.68995 0.617188 6.35424 0.617188H13.3467C14.011 0.617188 14.5501 1.15626 14.5501 1.82055V3.65405C14.5501 4.31915 14.011 4.8574 13.3467 4.8574Z" fill="#757A89"/>
<path d="M21.4327 13.6235C20.6846 12.8755 19.465 12.8755 18.717 13.6235L17.8291 14.5163L20.5464 17.2328L21.4327 16.3465C22.1888 15.5912 22.1888 14.3797 21.4327 13.6235Z" fill="#757A89"/>
<path d="M16.9688 15.375L12.2285 20.1071C12.131 20.2128 12.0659 20.3429 12.0415 20.4811L11.6838 22.587C11.6025 23.0505 12.009 23.4489 12.4725 23.3757L14.5783 23.018C14.7166 22.9936 14.8467 22.9285 14.9442 22.831L19.6845 18.0907L16.9688 15.375Z" fill="#757A89"/>
<path d="M16.782 2.73438H15.7697V3.64909C15.7697 4.98498 14.6826 6.07207 13.3467 6.07207H6.35423C5.01752 6.07207 3.93125 4.98498 3.93125 3.64909V2.73438H2.9027C1.30093 2.73438 0 4.0353 0 5.63707V20.4758C0 22.0776 1.30093 23.3785 2.9027 23.3785H10.592C10.4684 23.0606 10.4221 22.7158 10.4822 22.3719L10.8392 20.2717C10.9026 19.8993 11.0733 19.5554 11.3303 19.2749L16.5055 14.1069L17.8512 12.754C18.3512 12.2531 18.9928 11.9563 19.6831 11.871V5.6452C19.6847 4.02717 18.3919 2.73438 16.782 2.73438ZM8.58451 14.7948H5.05655C4.65245 14.7948 4.32478 14.4671 4.32478 14.063C4.32478 13.6589 4.65245 13.3313 5.05655 13.3313H8.58451C8.98861 13.3313 9.31628 13.6589 9.31628 14.063C9.31628 14.4671 8.98861 14.7948 8.58451 14.7948ZM12.9036 10.6416H5.05736C4.65326 10.6416 4.32559 10.3139 4.32559 9.90982C4.32559 9.50571 4.65326 9.17804 5.05736 9.17804H12.9036C13.3077 9.17804 13.6354 9.50571 13.6354 9.90982C13.6354 10.3139 13.3077 10.6416 12.9036 10.6416Z" fill="#757A89"/>
</svg>

<div class="menu-title">Forms</div>
    </a>
    <ul>
      <li> <a href="create-forms.html"><i class='bx bx-radio-circle'></i>Create Forms</a>
      </li>
      <li> <a href="##"><i class='bx bx-radio-circle'></i>Assignee form to rep</a>
      </li>
    </ul>
  </li>	
  <li>
    <a href="javascript:;" class="has-arrow">
    <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.6667 9.16667C13.6565 9.16667 12.8333 8.3435 12.8333 7.33333V0H1.83333C0.823167 0 0 0.823167 0 1.83333V27.5C0 28.512 0.823167 29.3333 1.83333 29.3333H20.1667C21.1787 29.3333 22 28.512 22 27.5V9.16667H14.6667ZM7.33333 25.6667H3.66667V20.1667H7.33333V25.6667ZM12.8333 25.6667H9.16667V16.5H12.8333V25.6667ZM18.3333 25.6667H14.6667V12.8333H18.3333V25.6667Z" fill="#757A89"/>
    </svg>
    
    <div class="menu-title">Reports</div>
    </a>
    <ul>
      <li> <a href="reports-vistits.html"><i class='bx bx-radio-circle'></i>Visits Report</a>
      </li>
      <li> <a href="reports-unvisited.html"><i class='bx bx-radio-circle'></i>Unvisited Report</a>
      </li>
      <li> <a href="##"><i class='bx bx-radio-circle'></i>Forms Report</a>
      </li>
      <li> <a href="##"><i class='bx bx-radio-circle'></i>Potential customers report</a>
      </li>
      <li> <a href="##"><i class='bx bx-radio-circle'></i>Media Report</a>
      </li>
    </ul>
  </li>	
  <li id="route">
    <a href="javascript:;" class="has-arrow">
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1111 12.2188C16.1441 12.2188 15.1989 12.5055 14.3949 13.0427C13.591 13.5799 12.9643 14.3434 12.5943 15.2367C12.2243 16.1301 12.1275 17.1131 12.3161 18.0614C12.5047 19.0098 12.9704 19.8809 13.6541 20.5646C14.3378 21.2483 15.2089 21.7139 16.1573 21.9026C17.1056 22.0912 18.0886 21.9944 18.982 21.6244C19.8753 21.2544 20.6388 20.6277 21.176 19.8238C21.7132 19.0198 21.9999 18.0746 21.9999 17.1076C21.9987 15.8114 21.4832 14.5687 20.5666 13.6521C19.65 12.7355 18.4073 12.22 17.1111 12.2188ZM19.474 18.2867C19.4262 18.3825 19.36 18.4679 19.2792 18.5381C19.1984 18.6083 19.1045 18.6619 19.0029 18.6958C18.9014 18.7297 18.7941 18.7433 18.6873 18.7357C18.5806 18.7281 18.4763 18.6996 18.3805 18.6517L16.7509 17.8369C16.6147 17.7698 16.5 17.6659 16.4196 17.5371C16.3393 17.4082 16.2966 17.2595 16.2962 17.1076V14.6632C16.2962 14.4471 16.3821 14.2398 16.5349 14.087C16.6877 13.9342 16.895 13.8484 17.1111 13.8484C17.3272 13.8484 17.5344 13.9342 17.6872 14.087C17.84 14.2398 17.9259 14.4471 17.9259 14.6632V16.6041L19.1049 17.1932C19.2011 17.2406 19.2869 17.3066 19.3575 17.3872C19.4281 17.4679 19.4821 17.5617 19.5164 17.6633C19.5507 17.7649 19.5646 17.8723 19.5573 17.9792C19.5501 18.0862 19.5218 18.1907 19.474 18.2867Z" fill="#757A89"/>
<path d="M20.3704 4.07407C20.3704 3.42577 20.1128 2.80401 19.6544 2.34559C19.196 1.88717 18.5742 1.62963 17.9259 1.62963H15.4815V0.814815C15.4815 0.598712 15.3956 0.391461 15.2428 0.238654C15.09 0.0858463 14.8828 0 14.6667 0C14.4506 0 14.2433 0.0858463 14.0905 0.238654C13.9377 0.391461 13.8518 0.598712 13.8518 0.814815V1.62963H6.51852V0.814815C6.51852 0.598712 6.43267 0.391461 6.27986 0.238654C6.12706 0.0858463 5.91981 0 5.7037 0C5.4876 0 5.28035 0.0858463 5.12754 0.238654C4.97473 0.391461 4.88889 0.598712 4.88889 0.814815V1.62963H2.44444C1.79614 1.62963 1.17438 1.88717 0.715961 2.34559C0.257539 2.80401 0 3.42577 0 4.07407V6.51852H20.3704V4.07407Z" fill="#757A89"/>
<path d="M17.1111 10.5929C18.2564 10.5913 19.3815 10.895 20.3704 11.4729V8.14844H0V17.9262C0.00193444 18.5739 0.260095 19.1946 0.718098 19.6526C1.1761 20.1106 1.79673 20.3687 2.44444 20.3707H11.4726C10.8947 19.3818 10.591 18.2567 10.5926 17.1114C10.595 15.3833 11.2825 13.7267 12.5044 12.5047C13.7264 11.2828 15.383 10.5953 17.1111 10.5929ZM4.88889 17.1114H3.25926C3.04316 17.1114 2.83591 17.0256 2.6831 16.8727C2.53029 16.7199 2.44444 16.5127 2.44444 16.2966C2.44444 16.0805 2.53029 15.8732 2.6831 15.7204C2.83591 15.5676 3.04316 15.4818 3.25926 15.4818H4.88889C5.10499 15.4818 5.31224 15.5676 5.46505 15.7204C5.61786 15.8732 5.7037 16.0805 5.7037 16.2966C5.7037 16.5127 5.61786 16.7199 5.46505 16.8727C5.31224 17.0256 5.10499 17.1114 4.88889 17.1114ZM4.88889 13.0373H3.25926C3.04316 13.0373 2.83591 12.9515 2.6831 12.7987C2.53029 12.6459 2.44444 12.4386 2.44444 12.2225C2.44444 12.0064 2.53029 11.7992 2.6831 11.6463C2.83591 11.4935 3.04316 11.4077 3.25926 11.4077H4.88889C5.10499 11.4077 5.31224 11.4935 5.46505 11.6463C5.61786 11.7992 5.7037 12.0064 5.7037 12.2225C5.7037 12.4386 5.61786 12.6459 5.46505 12.7987C5.31224 12.9515 5.10499 13.0373 4.88889 13.0373ZM9.77778 13.0373H8.14815C7.93204 13.0373 7.72479 12.9515 7.57199 12.7987C7.41918 12.6459 7.33333 12.4386 7.33333 12.2225C7.33333 12.0064 7.41918 11.7992 7.57199 11.6463C7.72479 11.4935 7.93204 11.4077 8.14815 11.4077H9.77778C9.99388 11.4077 10.2011 11.4935 10.3539 11.6463C10.5067 11.7992 10.5926 12.0064 10.5926 12.2225C10.5926 12.4386 10.5067 12.6459 10.3539 12.7987C10.2011 12.9515 9.99388 13.0373 9.77778 13.0373Z" fill="#757A89"/>
</svg>

      
  <div class="menu-title">  Schedule </div>
    </a>
    <ul>
      <li> <a href="calendar.html"><i class='bx bx-radio-circle'></i>Calendar</a>
      </li>
      <li id="croute"> <a href="route.html"><i class='bx bx-radio-circle'></i>Route</a>
      </li>
    </ul>
  </li>	
  <li>
    <a href="notifications.html" class="position-relative">
    <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.0002 25.5125C12.5007 25.5125 13.7928 24.6061 14.3598 23.3125H7.64062C8.20759 24.6061 9.49977 25.5125 11.0002 25.5125Z" fill="#757A89"/>
    <path d="M18.5778 12.602V10.9955C18.5778 7.58194 16.3088 4.68876 13.2 3.74379V2.68437C13.2 1.47129 12.2131 0.484375 11 0.484375C9.78695 0.484375 8.80003 1.47129 8.80003 2.68437V3.74379C5.6912 4.68876 3.42227 7.5819 3.42227 10.9955V12.602C3.42227 15.6005 2.27935 18.4437 0.20407 20.6079C0.000692692 20.8199 -0.0564583 21.1329 0.0588214 21.4031C0.174101 21.6734 0.439567 21.8488 0.733388 21.8488H21.2667C21.5605 21.8488 21.8259 21.6734 21.9412 21.4031C22.0565 21.1329 21.9993 20.8199 21.796 20.6079C19.7207 18.4437 18.5778 15.6004 18.5778 12.602ZM11.7334 3.45329C11.492 3.43002 11.2474 3.4177 11 3.4177C10.7526 3.4177 10.5081 3.43002 10.2667 3.45329V2.68437C10.2667 2.28001 10.5957 1.95104 11 1.95104C11.4044 1.95104 11.7334 2.28001 11.7334 2.68437V3.45329Z" fill="#757A89"/>
    <path d="M20.5329 10.993C20.5329 11.398 20.8612 11.7263 21.2662 11.7263C21.6712 11.7263 21.9996 11.398 21.9996 10.993C21.9996 8.05476 20.8554 5.2924 18.7777 3.21477C18.4914 2.92843 18.0271 2.92838 17.7407 3.21477C17.4543 3.50116 17.4543 3.96546 17.7407 4.25185C19.5413 6.05247 20.5329 8.44651 20.5329 10.993Z" fill="#757A89"/>
    <path d="M0.733331 11.7263C1.13833 11.7263 1.46666 11.3979 1.46666 10.9929C1.46666 8.44652 2.45832 6.05249 4.25889 4.25187C4.54528 3.96548 4.54528 3.50118 4.25889 3.21479C3.97255 2.9284 3.50821 2.9284 3.22182 3.21479C1.14419 5.29242 0 8.05473 0 10.9929C0 11.3979 0.328337 11.7263 0.733331 11.7263Z" fill="#757A89"/>
    </svg>
    
      <div class="menu-title">Notifications</div>
      <div class="notCount">5</div>
    </a>
  </li>
</ul>

`;
