document.getElementById("uploadButton").addEventListener("click", async () => {
    const fileInput = document.getElementById("fileInput");
    const resultDiv = document.getElementById("result");
    const uploadedImage = document.getElementById("uploadedImage");

    if (fileInput.files.length === 0) {
        resultDiv.innerText = "Please select an image file.";
        return;
    }

    const file = fileInput.files[0];

    // Display the uploaded image
    const reader = new FileReader();
    reader.onload = function (e) {
        uploadedImage.src = e.target.result;
        uploadedImage.style.display = "block";
    };
    reader.readAsDataURL(file);

    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await axios.post("http://localhost:8000/predict", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        const result = response.data;
        resultDiv.innerText = `Class: ${result.class}\nConfidence: ${(result.confidence * 100).toFixed(2)}%`;
    } catch (error) {
        console.error("Error:", error);
        resultDiv.innerText = "There was an error uploading the file. Please try again.";
    }
});
