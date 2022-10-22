#!/bin/bash

for image in *.png ;
do
   convert -resize 7% "$image" "thumbs/$(basename "$image" .png).webp" ;
done

