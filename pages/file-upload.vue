<template>
  <div>
    <h1>Upload Excel Test</h1>
    <form method="POST"  action="http://localhost:9090/demo/users/uploadFile" enctype="multipart/form-data">
      <table>
        <tr>
          <td>Select a file to upload</td>
          <td><input type="file" name="file" /></td>
        </tr>
        <tr>
            <td><input type="submit" value="Submit" /></td>
        </tr>
      </table>
    </form>
  </div>
</template>
