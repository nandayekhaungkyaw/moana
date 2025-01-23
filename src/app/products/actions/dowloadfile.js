


  export  const  handleDownload = (fileId,Name) => {
    console.log(fileId)
    const downloadUrl = `https://docs.google.com/document/d/${fileId}/export?format=pdf`;
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = Name; // Set the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  