docker run -it --rm -v %cd%:/app -v %cd%\..\www:/app/www -v %cd%\..\..\keys:/keys:ro -w /app --name vck c %*
