find ./ -type f -name "config.yml" | while read -r file; do
    dest_file="hugo.toml"
    yj -yt < "config.yaml" > "hugo.toml"
    echo "Converted: config.yaml -> hugo.toml"
    rm "$file"
done

