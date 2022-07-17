module.exports = {
  apps : [
    {
      name: "demoDB",
      cwd: ".",
      args: [
        "-jar",
        "demo_db-0.0.1-SNAPSHOT.jar"
      ],
      env: {
      },
      script: "/usr/bin/java",
      node_args: [],
      log_date_format: "YYYY-MM-DD HH:mm Z",
      exec_interpreter: "none",
      exec_mode: "fork"
    }
  ],
}
