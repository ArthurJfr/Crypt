<template>
    <div class="loader">
      <div class="spinner"></div>
    </div>
  </template>
  
  <style scoped>
  .loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8); /* Fond semi-transparent */
    z-index: 1000;
  }
  
  .spinner {
    width: 50px;
    height: 50px;
    border: 6px solid #ccc;
    border-top-color: #007bff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  