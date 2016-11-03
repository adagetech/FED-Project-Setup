# FED Project Setup

This is the base folder structure and gulp setup to be used on new projects.


Gulp Instructions
======
1. Download Node.
2. Download Git (select command line, not GUI)
3. Download Python (2.7.X version)

Setting Up Project
======
1. Drag and drop package.json and gulpfile.js to root Web directory.
2. Drag and drop static folder to root Web directory.
3. Add the following as Pre-Build commands (right-click Web project, select Properties -> Build Events):

    ```
    cd $(ProjectDir)
    call npm install --msvs_version=2013
    "$(DevEnvDir)tf" checkout /lock:none $(ProjectDir)config.js
    "$(DevEnvDir)tf" checkout /lock:none $(ProjectDir)package.json
    call ./node_modules/.bin/gulp sass:build-prod
    call ./node_modules/.bin/jspm install
    ```

4. Unload the csproj and add this before the </Project> tag: (for automated build projects)

    ```XML
    <Target Name="BeforeBuild">
      <ItemGroup>
        <Content Include="static\stylesheets\*.*" />
      </ItemGroup>
    </Target>
    ```

How to Use
======
1. Run "npm install" in root directory to download necessary packages.
2. Run "gulp sass:watch" to initiate watch task. Any saved changes to Sass files will automatically compile.
3. Run "gulp sass:build" to compile Sass.
4. Run "gulp sass:build-prod" to compile Sass for production (minification on; source maps off)
                                                                           
Extras
======
1. A basic custom modernizr build, an example SVG sprite, and a properly scoped global.js with AJAX-ing for the sprite are included as well.                                                                           
                                                                           
"# FED-Project-Setup" 
