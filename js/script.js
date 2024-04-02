// Copyright (c) 2024 Mohammed All rights reserved
//
// Created by: Mohammed
// Created on: APR 2024
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of Triangle.
 */
function calculate() {
  // input
  const H = parseInt(document.getElementById('Hight of Trapezoid').value)
  const A = parseInt(document.getElementById('A of Trapezoid').value)
  const B = parseInt(document.getElementById('B of Trapezoid').value)

  // process
  const area = [(A + B) / 2] * H

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' mm² '
}