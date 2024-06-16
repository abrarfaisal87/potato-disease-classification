# potato-disease-classification
Early and Late blight disease classifier using CNN
## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Dataset](#dataset)
- [Results](#results)

## Introduction

Potato blight is a serious disease that affects potato crops worldwide, leading to significant yield losses. This project aims to classify potato leaves into three categories: healthy, early blight, and late blight using a Convolutional Neural Network (CNN).

## Technologies Used

- **Python**: The core programming language.
- **TensorFlow & Keras**: For building and training the neural network.
- **Pandas & Numpy**: For data manipulation and analysis.
- **Matplotlib**: For visualizing data and results.
- **FastAPI**: For creating the API to interact with the model.

## Project Structure

- **data/**: Contains raw and processed data.
- **models/**: Stores the trained models.
- **notebooks/**: Jupyter notebooks for exploration and prototyping.
- **src/**: Core Python scripts for preprocessing, training, prediction, and API.
- **tests/**: Unit tests for the project.
- **requirements.txt**: Dependencies.

## Dataset

The dataset used consists of images of potato leaves categorized into three classes:
- Healthy
- Early Blight
- Late Blight

## results
Our cnn model gave 98% accuracy
Vgg-16 gave 94% 
Restnet-50 84#
