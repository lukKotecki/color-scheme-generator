console.log("Hello")

colorSamplesContainer = document.getElementById('color-samples-container')
colorPreviewArray = document.getElementsByClassName('color-preview')
colorCodeArray = document.getElementsByClassName('color-code')

colorSamplesContainer.children[0].style.backgroundColor = 'red'

colorPreviewArray[1].style.backgroundColor = '#333'
colorPreviewArray[2].style.backgroundColor = '#444'
colorPreviewArray[3].style.backgroundColor = '#555'
colorPreviewArray[4].style.backgroundColor = '#666'
colorPreviewArray[5].style.backgroundColor = '#777'

colorCodeArray[0].textContent = "#FFFAAA"
colorCodeArray[1].textContent = "#333"
colorCodeArray[2].textContent = "#444"
colorCodeArray[3].textContent = "#555"
colorCodeArray[4].textContent = "#666"
colorCodeArray[5].textContent = "#777"






