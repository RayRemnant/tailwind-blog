interface dataEntry {
  'Graphics Card': string
  'Lowest Price': string
  '1080p Ultra': string
  '1080p Medium': string
  '1440p Ultra': string
  '4K Ultra': string
  'Specifications (Links to Review)': string
  fullHD?: number
  quadHD?: number
}

const x: dataEntry[] = [
  {
    'Graphics Card': 'GeForce RTX 4090',
    'Lowest Price': '$1,599',
    '1080p Ultra': '100.0% (151.6fps)',
    '1080p Medium': '100.0% (189.6fps)',
    '1440p Ultra': '100.0% (143.1fps)',
    '4K Ultra': '100.0% (114.1fps)',
    'Specifications (Links to Review)':
      'AD102, 16384 shaders, 2520MHz, 24GB GDDR6X@21Gbps, 1008GB/s, 450W',
  },
  {
    'Graphics Card': 'Radeon RX 7900 XTX',
    'Lowest Price': '$949',
    '1080p Ultra': '97.3% (147.5fps)',
    '1080p Medium': '98.7% (187.2fps)',
    '1440p Ultra': '93.4% (133.7fps)',
    '4K Ultra': '81.6% (93.0fps)',
    'Specifications (Links to Review)':
      'Navi 31, 6144 shaders, 2500MHz, 24GB GDDR6@20Gbps, 960GB/s, 355W',
  },
  {
    'Graphics Card': 'GeForce RTX 4080',
    'Lowest Price': '$1,059',
    '1080p Ultra': '94.0% (142.6fps)',
    '1080p Medium': '97.3% (184.4fps)',
    '1440p Ultra': '90.1% (129.0fps)',
    '4K Ultra': '77.8% (88.7fps)',
    'Specifications (Links to Review)':
      'AD103, 9728 shaders, 2505MHz, 16GB GDDR6X@22.4Gbps, 717GB/s, 320W',
  },
  {
    'Graphics Card': 'Radeon RX 7900 XT',
    'Lowest Price': '$799',
    '1080p Ultra': '93.1% (141.2fps)',
    '1080p Medium': '96.6% (183.0fps)',
    '1440p Ultra': '86.9% (124.3fps)',
    '4K Ultra': '69.8% (79.6fps)',
    'Specifications (Links to Review)':
      'Navi 31, 5736 shaders, 2400MHz, 20GB GDDR6@20Gbps, 800GB/s, 315W',
  },
  {
    'Graphics Card': 'Radeon RX 6950 XT',
    'Lowest Price': '$590',
    '1080p Ultra': '89.6% (135.8fps)',
    '1080p Medium': '98.9% (187.4fps)',
    '1440p Ultra': '79.5% (113.7fps)',
    '4K Ultra': '59.3% (67.6fps)',
    'Specifications (Links to Review)':
      'Navi 21, 5120 shaders, 2310MHz, 16GB GDDR6@18Gbps, 576GB/s, 335W',
  },
  {
    'Graphics Card': 'GeForce RTX 4070 Ti',
    'Lowest Price': '$784',
    '1080p Ultra': '89.3% (135.4fps)',
    '1080p Medium': '95.4% (180.9fps)',
    '1440p Ultra': '80.5% (115.1fps)',
    '4K Ultra': '62.9% (71.8fps)',
    'Specifications (Links to Review)':
      'AD104, 7680 shaders, 2610MHz, 12GB GDDR6X@21Gbps, 504GB/s, 285W',
  },
  {
    'Graphics Card': 'GeForce RTX 3090 Ti',
    'Lowest Price': '$1,849',
    '1080p Ultra': '87.5% (132.6fps)',
    '1080p Medium': '94.3% (178.8fps)',
    '1440p Ultra': '80.1% (114.7fps)',
    '4K Ultra': '67.0% (76.4fps)',
    'Specifications (Links to Review)':
      'GA102, 10752 shaders, 1860MHz, 24GB GDDR6X@21Gbps, 1008GB/s, 450W',
  },
  {
    'Graphics Card': 'Radeon RX 6900 XT',
    'Lowest Price': '$701',
    '1080p Ultra': '87.0% (132.0fps)',
    '1080p Medium': '97.7% (185.3fps)',
    '1440p Ultra': '75.9% (108.6fps)',
    '4K Ultra': '55.6% (63.5fps)',
    'Specifications (Links to Review)':
      'Navi 21, 5120 shaders, 2250MHz, 16GB GDDR6@16Gbps, 512GB/s, 300W',
  },
  {
    'Graphics Card': 'GeForce RTX 3090',
    'Lowest Price': '$1,367',
    '1080p Ultra': '84.1% (127.6fps)',
    '1080p Medium': '92.7% (175.8fps)',
    '1440p Ultra': '75.4% (107.9fps)',
    '4K Ultra': '62.3% (71.0fps)',
    'Specifications (Links to Review)':
      'GA102, 10496 shaders, 1695MHz, 24GB GDDR6X@19.5Gbps, 936GB/s, 350W',
  },
  {
    'Graphics Card': 'Radeon RX 6800 XT',
    'Lowest Price': '$499',
    '1080p Ultra': '84.0% (127.3fps)',
    '1080p Medium': '95.6% (181.2fps)',
    '1440p Ultra': '72.0% (103.0fps)',
    '4K Ultra': '52.1% (59.4fps)',
    'Specifications (Links to Review)':
      'Navi 21, 4608 shaders, 2250MHz, 16GB GDDR6@16Gbps, 512GB/s, 300W',
  },
  {
    'Graphics Card': 'Radeon RX 7800 XT',
    'Lowest Price': '$499',
    '1080p Ultra': '83.9% (127.2fps)',
    '1080p Medium': '95.8% (181.5fps)',
    '1440p Ultra': '72.7% (104.0fps)',
    '4K Ultra': '53.2% (60.7fps)',
    'Specifications (Links to Review)':
      'Navi 32, 3840 shaders, 2430MHz, 16GB GDDR6@19.5Gbps, 624GB/s, 263W',
  },
  {
    'Graphics Card': 'GeForce RTX 3080 Ti',
    'Lowest Price': '$999',
    '1080p Ultra': '83.1% (126.0fps)',
    '1080p Medium': '91.5% (173.4fps)',
    '1440p Ultra': '74.0% (105.8fps)',
    '4K Ultra': '60.6% (69.1fps)',
    'Specifications (Links to Review)':
      'GA102, 10240 shaders, 1665MHz, 12GB GDDR6X@19Gbps, 912GB/s, 350W',
  },
  {
    'Graphics Card': 'GeForce RTX 3080 12GB',
    'Lowest Price': '$989',
    '1080p Ultra': '81.9% (124.2fps)',
    '1080p Medium': '90.2% (170.9fps)',
    '1440p Ultra': '72.7% (104.0fps)',
    '4K Ultra': '58.7% (67.0fps)',
    'Specifications (Links to Review)':
      'GA102, 8960 shaders, 1845MHz, 12GB GDDR6X@19Gbps, 912GB/s, 400W',
  },
  {
    'Graphics Card': 'GeForce RTX 4070',
    'Lowest Price': '$519',
    '1080p Ultra': '81.5% (123.6fps)',
    '1080p Medium': '93.0% (176.3fps)',
    '1440p Ultra': '69.1% (98.9fps)',
    '4K Ultra': '50.2% (57.2fps)',
    'Specifications (Links to Review)':
      'AD104, 5888 shaders, 2475MHz, 12GB GDDR6X@21Gbps, 504GB/s, 200W',
  },
  {
    'Graphics Card': 'GeForce RTX 3080',
    'Lowest Price': '$976',
    '1080p Ultra': '78.5% (119.0fps)',
    '1080p Medium': '89.2% (169.2fps)',
    '1440p Ultra': '68.5% (98.1fps)',
    '4K Ultra': '54.7% (62.4fps)',
    'Specifications (Links to Review)':
      'GA102, 8704 shaders, 1710MHz, 10GB GDDR6X@19Gbps, 760GB/s, 320W',
  },
  {
    'Graphics Card': 'Radeon RX 6800',
    'Lowest Price': '$390',
    '1080p Ultra': '76.7% (116.3fps)',
    '1080p Medium': '91.8% (174.0fps)',
    '1440p Ultra': '63.1% (90.2fps)',
    '4K Ultra': '44.6% (50.9fps)',
    'Specifications (Links to Review)':
      'Navi 21, 3840 shaders, 2105MHz, 16GB GDDR6@16Gbps, 512GB/s, 250W',
  },
  {
    'Graphics Card': 'Radeon RX 7700 XT',
    'Lowest Price': '$449',
    '1080p Ultra': '75.0% (113.7fps)',
    '1080p Medium': '89.3% (169.4fps)',
    '1440p Ultra': '63.5% (90.9fps)',
    '4K Ultra': '44.1% (50.2fps)',
    'Specifications (Links to Review)':
      'Navi 32, 3456 shaders, 2544MHz, 12GB GDDR6@18Gbps, 432GB/s, 245W',
  },
  {
    'Graphics Card': 'GeForce RTX 3070 Ti',
    'Lowest Price': '$409',
    '1080p Ultra': '69.8% (105.8fps)',
    '1080p Medium': '85.1% (161.3fps)',
    '1440p Ultra': '59.0% (84.4fps)',
    '4K Ultra': '41.8% (47.7fps)',
    'Specifications (Links to Review)':
      'GA104, 6144 shaders, 1770MHz, 8GB GDDR6X@19Gbps, 608GB/s, 290W',
  },
  {
    'Graphics Card': 'Radeon RX 6750 XT',
    'Lowest Price': '$359',
    '1080p Ultra': '68.7% (104.2fps)',
    '1080p Medium': '87.0% (164.9fps)',
    '1440p Ultra': '54.3% (77.7fps)',
    '4K Ultra': '37.5% (42.8fps)',
    'Specifications (Links to Review)':
      'Navi 22, 2560 shaders, 2600MHz, 12GB GDDR6@18Gbps, 432GB/s, 250W',
  },
  {
    'Graphics Card': 'GeForce RTX 4060 Ti 16GB',
    'Lowest Price': '$449',
    '1080p Ultra': '67.2% (102.0fps)',
    '1080p Medium': '85.7% (162.5fps)',
    '1440p Ultra': '52.9% (75.7fps)',
    '4K Ultra': '36.5% (41.6fps)',
    'Specifications (Links to Review)':
      'AD106, 4352 shaders, 2535MHz, 16GB GDDR6@18Gbps, 288GB/s, 160W',
  },
  {
    'Graphics Card': 'GeForce RTX 4060 Ti',
    'Lowest Price': '$369',
    '1080p Ultra': '67.1% (101.7fps)',
    '1080p Medium': '84.3% (159.8fps)',
    '1440p Ultra': '52.8% (75.5fps)',
    '4K Ultra': '34.7% (39.6fps)',
    'Specifications (Links to Review)':
      'AD106, 4352 shaders, 2535MHz, 8GB GDDR6@18Gbps, 288GB/s, 160W',
  },
  {
    'Graphics Card': 'GeForce RTX 3070',
    'Lowest Price': '$364',
    '1080p Ultra': '66.3% (100.5fps)',
    '1080p Medium': '82.4% (156.2fps)',
    '1440p Ultra': '55.2% (79.0fps)',
    '4K Ultra': '38.9% (44.4fps)',
    'Specifications (Links to Review)':
      'GA104, 5888 shaders, 1725MHz, 8GB GDDR6@14Gbps, 448GB/s, 220W',
  },
  {
    'Graphics Card': 'Radeon RX 6700 XT',
    'Lowest Price': '$299',
    '1080p Ultra': '66.1% (100.3fps)',
    '1080p Medium': '84.7% (160.6fps)',
    '1440p Ultra': '51.4% (73.5fps)',
    '4K Ultra': '35.3% (40.3fps)',
    'Specifications (Links to Review)':
      'Navi 22, 2560 shaders, 2581MHz, 12GB GDDR6@16Gbps, 384GB/s, 230W',
  },
  {
    'Graphics Card': 'Titan RTX',
    'Lowest Price': 'Row 23 - Cell 1',
    '1080p Ultra': '65.5% (99.3fps)',
    '1080p Medium': '82.6% (156.6fps)',
    '1440p Ultra': '55.6% (79.5fps)',
    '4K Ultra': '41.9% (47.8fps)',
    'Specifications (Links to Review)':
      'TU102, 4608 shaders, 1770MHz, 24GB GDDR6@14Gbps, 672GB/s, 280W',
  },
  {
    'Graphics Card': 'GeForce RTX 2080 Ti',
    'Lowest Price': 'Row 24 - Cell 1',
    '1080p Ultra': '64.7% (98.1fps)',
    '1080p Medium': '81.2% (154.0fps)',
    '1440p Ultra': '53.8% (77.0fps)',
    '4K Ultra': '39.4% (44.9fps)',
    'Specifications (Links to Review)':
      'TU102, 4352 shaders, 1545MHz, 11GB GDDR6@14Gbps, 616GB/s, 250W',
  },
  {
    'Graphics Card': 'GeForce RTX 3060 Ti',
    'Lowest Price': '$299',
    '1080p Ultra': '60.9% (92.3fps)',
    '1080p Medium': '78.2% (148.2fps)',
    '1440p Ultra': '49.6% (71.0fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'GA104, 4864 shaders, 1665MHz, 8GB GDDR6@14Gbps, 448GB/s, 200W',
  },
  {
    'Graphics Card': 'GeForce RTX 2080 Super',
    'Lowest Price': 'Row 26 - Cell 1',
    '1080p Ultra': '57.3% (86.8fps)',
    '1080p Medium': '74.7% (141.7fps)',
    '1440p Ultra': '46.0% (65.8fps)',
    '4K Ultra': '32.2% (36.7fps)',
    'Specifications (Links to Review)':
      'TU104, 3072 shaders, 1815MHz, 8GB GDDR6@15.5Gbps, 496GB/s, 250W',
  },
  {
    'Graphics Card': 'Radeon RX 6700 10GB',
    'Lowest Price': '$279',
    '1080p Ultra': '56.9% (86.2fps)',
    '1080p Medium': '76.5% (145.1fps)',
    '1440p Ultra': '43.7% (62.6fps)',
    '4K Ultra': '28.9% (32.9fps)',
    'Specifications (Links to Review)':
      'Navi 22, 2304 shaders, 2450MHz, 10GB GDDR6@16Gbps, 320GB/s, 175W',
  },
  {
    'Graphics Card': 'GeForce RTX 4060',
    'Lowest Price': '$298',
    '1080p Ultra': '56.0% (84.9fps)',
    '1080p Medium': '75.1% (142.3fps)',
    '1440p Ultra': '42.8% (61.2fps)',
    '4K Ultra': '27.9% (31.9fps)',
    'Specifications (Links to Review)':
      'AD107, 3072 shaders, 2460MHz, 8GB GDDR6@17Gbps, 272GB/s, 115W',
  },
  {
    'Graphics Card': 'GeForce RTX 2080',
    'Lowest Price': 'Row 29 - Cell 1',
    '1080p Ultra': '55.1% (83.6fps)',
    '1080p Medium': '72.0% (136.5fps)',
    '1440p Ultra': '43.9% (62.8fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'TU104, 2944 shaders, 1710MHz, 8GB GDDR6@14Gbps, 448GB/s, 215W',
  },
  {
    'Graphics Card': 'Radeon RX 7600',
    'Lowest Price': '$269',
    '1080p Ultra': '54.3% (82.3fps)',
    '1080p Medium': '75.9% (143.9fps)',
    '1440p Ultra': '40.0% (57.3fps)',
    '4K Ultra': '25.5% (29.1fps)',
    'Specifications (Links to Review)':
      'Navi 33, 2048 shaders, 2655MHz, 8GB GDDR6@18Gbps, 288GB/s, 165W',
  },
  {
    'Graphics Card': 'Radeon RX 6650 XT',
    'Lowest Price': '$229',
    '1080p Ultra': '52.7% (80.0fps)',
    '1080p Medium': '72.9% (138.2fps)',
    '1440p Ultra': '39.5% (56.5fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'Navi 23, 2048 shaders, 2635MHz, 8GB GDDR6@18Gbps, 280GB/s, 180W',
  },
  {
    'Graphics Card': 'GeForce RTX 2070 Super',
    'Lowest Price': 'Row 32 - Cell 1',
    '1080p Ultra': '51.6% (78.3fps)',
    '1080p Medium': '68.3% (129.5fps)',
    '1440p Ultra': '40.6% (58.1fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'TU104, 2560 shaders, 1770MHz, 8GB GDDR6@14Gbps, 448GB/s, 215W',
  },
  {
    'Graphics Card': 'Radeon RX 6600 XT',
    'Lowest Price': '$239',
    '1080p Ultra': '51.5% (78.1fps)',
    '1080p Medium': '71.6% (135.8fps)',
    '1440p Ultra': '38.6% (55.2fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'Navi 23, 2048 shaders, 2589MHz, 8GB GDDR6@16Gbps, 256GB/s, 160W',
  },
  {
    'Graphics Card': 'Intel Arc A770 16GB',
    'Lowest Price': '$319',
    '1080p Ultra': '50.7% (76.9fps)',
    '1080p Medium': '61.4% (116.4fps)',
    '1440p Ultra': '41.8% (59.8fps)',
    '4K Ultra': '30.9% (35.3fps)',
    'Specifications (Links to Review)':
      'ACM-G10, 4096 shaders, 2400MHz, 16GB GDDR6@17.5Gbps, 560GB/s, 225W',
  },
  {
    'Graphics Card': 'Intel Arc A770 8GB',
    'Lowest Price': '$289',
    '1080p Ultra': '49.7% (75.3fps)',
    '1080p Medium': '60.9% (115.5fps)',
    '1440p Ultra': '40.2% (57.5fps)',
    '4K Ultra': '29.1% (33.2fps)',
    'Specifications (Links to Review)':
      'ACM-G10, 4096 shaders, 2400MHz, 8GB GDDR6@16Gbps, 512GB/s, 225W',
  },
  {
    'Graphics Card': 'Radeon RX 5700 XT',
    'Lowest Price': 'Row 36 - Cell 1',
    '1080p Ultra': '48.3% (73.3fps)',
    '1080p Medium': '65.9% (124.9fps)',
    '1440p Ultra': '37.1% (53.1fps)',
    '4K Ultra': '25.6% (29.3fps)',
    'Specifications (Links to Review)':
      'Navi 10, 2560 shaders, 1905MHz, 8GB GDDR6@14Gbps, 448GB/s, 225W',
  },
  {
    'Graphics Card': 'GeForce RTX 3060',
    'Lowest Price': 'Row 37 - Cell 1',
    '1080p Ultra': '48.1% (73.0fps)',
    '1080p Medium': '63.8% (121.0fps)',
    '1440p Ultra': '37.7% (54.0fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'GA106, 3584 shaders, 1777MHz, 12GB GDDR6@15Gbps, 360GB/s, 170W',
  },
  {
    'Graphics Card': 'Intel Arc A750',
    'Lowest Price': '$209',
    '1080p Ultra': '46.7% (70.8fps)',
    '1080p Medium': '58.2% (110.4fps)',
    '1440p Ultra': '37.5% (53.7fps)',
    '4K Ultra': '27.3% (31.1fps)',
    'Specifications (Links to Review)':
      'ACM-G10, 3584 shaders, 2350MHz, 8GB GDDR6@16Gbps, 512GB/s, 225W',
  },
  {
    'Graphics Card': 'GeForce RTX 2070',
    'Lowest Price': 'Row 39 - Cell 1',
    '1080p Ultra': '46.4% (70.3fps)',
    '1080p Medium': '62.8% (119.0fps)',
    '1440p Ultra': '36.1% (51.6fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'TU106, 2304 shaders, 1620MHz, 8GB GDDR6@14Gbps, 448GB/s, 175W',
  },
  {
    'Graphics Card': 'Radeon VII',
    'Lowest Price': 'Row 40 - Cell 1',
    '1080p Ultra': '45.9% (69.5fps)',
    '1080p Medium': '60.1% (113.9fps)',
    '1440p Ultra': '37.0% (53.0fps)',
    '4K Ultra': '27.6% (31.5fps)',
    'Specifications (Links to Review)':
      'Vega 20, 3840 shaders, 1750MHz, 16GB HBM2@2.0Gbps, 1024GB/s, 300W',
  },
  {
    'Graphics Card': 'Radeon RX 6600',
    'Lowest Price': '$189',
    '1080p Ultra': '44.4% (67.3fps)',
    '1080p Medium': '62.1% (117.7fps)',
    '1440p Ultra': '32.6% (46.6fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'Navi 23, 1792 shaders, 2491MHz, 8GB GDDR6@14Gbps, 224GB/s, 132W',
  },
  {
    'Graphics Card': 'GeForce GTX 1080 Ti',
    'Lowest Price': 'Row 42 - Cell 1',
    '1080p Ultra': '43.8% (66.4fps)',
    '1080p Medium': '58.1% (110.2fps)',
    '1440p Ultra': '35.1% (50.2fps)',
    '4K Ultra': '25.9% (29.5fps)',
    'Specifications (Links to Review)':
      'GP102, 3584 shaders, 1582MHz, 11GB GDDR5X@11Gbps, 484GB/s, 250W',
  },
  {
    'Graphics Card': 'GeForce RTX 2060 Super',
    'Lowest Price': 'Row 43 - Cell 1',
    '1080p Ultra': '43.6% (66.2fps)',
    '1080p Medium': '59.0% (111.8fps)',
    '1440p Ultra': '33.6% (48.1fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'TU106, 2176 shaders, 1650MHz, 8GB GDDR6@14Gbps, 448GB/s, 175W',
  },
  {
    'Graphics Card': 'Intel Arc A580',
    'Lowest Price': 'Row 44 - Cell 1',
    '1080p Ultra': '42.9% (65.1fps)',
    '1080p Medium': '53.3% (101.1fps)',
    '1440p Ultra': '34.1% (48.8fps)',
    '4K Ultra': '24.5% (27.9fps)',
    'Specifications (Links to Review)':
      'ACM-G10, 3072 shaders, 2300MHz, 8GB GDDR6@16Gbps, 512GB/s, 185W',
  },
  {
    'Graphics Card': 'Radeon RX 5700',
    'Lowest Price': 'Row 45 - Cell 1',
    '1080p Ultra': '42.6% (64.5fps)',
    '1080p Medium': '58.4% (110.8fps)',
    '1440p Ultra': '32.6% (46.7fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'Navi 10, 2304 shaders, 1725MHz, 8GB GDDR6@14Gbps, 448GB/s, 180W',
  },
  {
    'Graphics Card': 'Radeon RX 5600 XT',
    'Lowest Price': 'Row 46 - Cell 1',
    '1080p Ultra': '38.1% (57.8fps)',
    '1080p Medium': '52.7% (100.0fps)',
    '1440p Ultra': '29.4% (42.0fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'Navi 10, 2304 shaders, 1750MHz, 8GB GDDR6@14Gbps, 336GB/s, 160W',
  },
  {
    'Graphics Card': 'Radeon RX Vega 64',
    'Lowest Price': 'Row 47 - Cell 1',
    '1080p Ultra': '37.4% (56.7fps)',
    '1080p Medium': '49.7% (94.3fps)',
    '1440p Ultra': '29.1% (41.6fps)',
    '4K Ultra': '20.6% (23.5fps)',
    'Specifications (Links to Review)':
      'Vega 10, 4096 shaders, 1546MHz, 8GB HBM2@1.89Gbps, 484GB/s, 295W',
  },
  {
    'Graphics Card': 'GeForce RTX 2060',
    'Lowest Price': 'Row 48 - Cell 1',
    '1080p Ultra': '36.9% (55.9fps)',
    '1080p Medium': '52.9% (100.2fps)',
    '1440p Ultra': '27.9% (39.9fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'TU106, 1920 shaders, 1680MHz, 6GB GDDR6@14Gbps, 336GB/s, 160W',
  },
  {
    'Graphics Card': 'GeForce GTX 1080',
    'Lowest Price': 'Row 49 - Cell 1',
    '1080p Ultra': '35.0% (53.0fps)',
    '1080p Medium': '47.4% (89.9fps)',
    '1440p Ultra': '27.6% (39.4fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'GP104, 2560 shaders, 1733MHz, 8GB GDDR5X@10Gbps, 320GB/s, 180W',
  },
  {
    'Graphics Card': 'GeForce RTX 3050',
    'Lowest Price': 'Row 50 - Cell 1',
    '1080p Ultra': '34.2% (51.9fps)',
    '1080p Medium': '46.8% (88.8fps)',
    '1440p Ultra': '26.9% (38.5fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'GA106, 2560 shaders, 1777MHz, 8GB GDDR6@14Gbps, 224GB/s, 130W',
  },
  {
    'Graphics Card': 'GeForce GTX 1070 Ti',
    'Lowest Price': 'Row 51 - Cell 1',
    '1080p Ultra': '33.7% (51.1fps)',
    '1080p Medium': '45.2% (85.7fps)',
    '1440p Ultra': '26.5% (37.9fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'GP104, 2432 shaders, 1683MHz, 8GB GDDR5@8Gbps, 256GB/s, 180W',
  },
  {
    'Graphics Card': 'Radeon RX Vega 56',
    'Lowest Price': 'Row 52 - Cell 1',
    '1080p Ultra': '33.4% (50.6fps)',
    '1080p Medium': '44.4% (84.2fps)',
    '1440p Ultra': '25.8% (37.0fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'Vega 10, 3584 shaders, 1471MHz, 8GB HBM2@1.6Gbps, 410GB/s, 210W',
  },
  {
    'Graphics Card': 'GeForce GTX 1660 Super',
    'Lowest Price': 'Row 53 - Cell 1',
    '1080p Ultra': '29.8% (45.3fps)',
    '1080p Medium': '43.5% (82.5fps)',
    '1440p Ultra': '22.7% (32.5fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'TU116, 1408 shaders, 1785MHz, 6GB GDDR6@14Gbps, 336GB/s, 125W',
  },
  {
    'Graphics Card': 'GeForce GTX 1660 Ti',
    'Lowest Price': 'Row 54 - Cell 1',
    '1080p Ultra': '29.7% (45.0fps)',
    '1080p Medium': '43.3% (82.1fps)',
    '1440p Ultra': '22.6% (32.3fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'TU116, 1536 shaders, 1770MHz, 6GB GDDR6@12Gbps, 288GB/s, 120W',
  },
  {
    'Graphics Card': 'GeForce GTX 1070',
    'Lowest Price': 'Row 55 - Cell 1',
    '1080p Ultra': '29.5% (44.7fps)',
    '1080p Medium': '39.6% (75.0fps)',
    '1440p Ultra': '23.1% (33.1fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'GP104, 1920 shaders, 1683MHz, 8GB GDDR5@8Gbps, 256GB/s, 150W',
  },
  {
    'Graphics Card': 'GeForce GTX 1660',
    'Lowest Price': 'Row 56 - Cell 1',
    '1080p Ultra': '26.6% (40.3fps)',
    '1080p Medium': '39.4% (74.7fps)',
    '1440p Ultra': '20.1% (28.7fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'TU116, 1408 shaders, 1785MHz, 6GB GDDR5@8Gbps, 192GB/s, 120W',
  },
  {
    'Graphics Card': 'Radeon RX 5500 XT 8GB',
    'Lowest Price': 'Row 57 - Cell 1',
    '1080p Ultra': '26.2% (39.7fps)',
    '1080p Medium': '38.0% (72.1fps)',
    '1440p Ultra': '19.7% (28.2fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'Navi 14, 1408 shaders, 1845MHz, 8GB GDDR6@14Gbps, 224GB/s, 130W',
  },
  {
    'Graphics Card': 'Radeon RX 590',
    'Lowest Price': 'Row 58 - Cell 1',
    '1080p Ultra': '25.9% (39.3fps)',
    '1080p Medium': '36.2% (68.5fps)',
    '1440p Ultra': '20.3% (29.0fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'Polaris 30, 2304 shaders, 1545MHz, 8GB GDDR5@8Gbps, 256GB/s, 225W',
  },
  {
    'Graphics Card': 'GeForce GTX 980 Ti',
    'Lowest Price': 'Row 59 - Cell 1',
    '1080p Ultra': '23.7% (35.9fps)',
    '1080p Medium': '33.0% (62.6fps)',
    '1440p Ultra': '18.6% (26.6fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'GM200, 2816 shaders, 1075MHz, 6GB GDDR5@7Gbps, 336GB/s, 250W',
  },
  {
    'Graphics Card': 'Radeon RX 580 8GB',
    'Lowest Price': 'Row 60 - Cell 1',
    '1080p Ultra': '23.3% (35.3fps)',
    '1080p Medium': '32.6% (61.7fps)',
    '1440p Ultra': '18.2% (26.0fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'Polaris 20, 2304 shaders, 1340MHz, 8GB GDDR5@8Gbps, 256GB/s, 185W',
  },
  {
    'Graphics Card': 'Radeon R9 Fury X',
    'Lowest Price': 'Row 61 - Cell 1',
    '1080p Ultra': '23.2% (35.2fps)',
    '1080p Medium': '33.7% (63.8fps)',
    '1440p Ultra': '',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'Fiji, 4096 shaders, 1050MHz, 4GB HBM2@2Gbps, 512GB/s, 275W',
  },
  {
    'Graphics Card': 'GeForce GTX 1650 Super',
    'Lowest Price': 'Row 62 - Cell 1',
    '1080p Ultra': '22.3% (33.9fps)',
    '1080p Medium': '35.7% (67.7fps)',
    '1440p Ultra': '',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'TU116, 1280 shaders, 1725MHz, 4GB GDDR6@12Gbps, 192GB/s, 100W',
  },
  {
    'Graphics Card': 'Radeon RX 5500 XT 4GB',
    'Lowest Price': 'Row 63 - Cell 1',
    '1080p Ultra': '22.0% (33.3fps)',
    '1080p Medium': '35.2% (66.8fps)',
    '1440p Ultra': '',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'Navi 14, 1408 shaders, 1845MHz, 4GB GDDR6@14Gbps, 224GB/s, 130W',
  },
  {
    'Graphics Card': 'GeForce GTX 1060 6GB',
    'Lowest Price': 'Row 64 - Cell 1',
    '1080p Ultra': '21.1% (32.1fps)',
    '1080p Medium': '30.4% (57.7fps)',
    '1440p Ultra': '16.1% (23.0fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'GP106, 1280 shaders, 1708MHz, 6GB GDDR5@8Gbps, 192GB/s, 120W',
  },
  {
    'Graphics Card': 'Radeon RX 6500 XT',
    'Lowest Price': 'Row 65 - Cell 1',
    '1080p Ultra': '20.2% (30.6fps)',
    '1080p Medium': '34.7% (65.8fps)',
    '1440p Ultra': '12.6% (18.0fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'Navi 24, 1024 shaders, 2815MHz, 4GB GDDR6@18Gbps, 144GB/s, 107W',
  },
  {
    'Graphics Card': 'Radeon R9 390',
    'Lowest Price': 'Row 66 - Cell 1',
    '1080p Ultra': '19.6% (29.8fps)',
    '1080p Medium': '26.9% (51.1fps)',
    '1440p Ultra': '',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'Grenada, 2560 shaders, 1000MHz, 8GB GDDR5@6Gbps, 384GB/s, 275W',
  },
  {
    'Graphics Card': 'GeForce GTX 980',
    'Lowest Price': 'Row 67 - Cell 1',
    '1080p Ultra': '19.1% (28.9fps)',
    '1080p Medium': '28.3% (53.6fps)',
    '1440p Ultra': '',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'GM204, 2048 shaders, 1216MHz, 4GB GDDR5@7Gbps, 256GB/s, 165W',
  },
  {
    'Graphics Card': 'GeForce GTX 1650 GDDR6',
    'Lowest Price': 'Row 68 - Cell 1',
    '1080p Ultra': '19.0% (28.8fps)',
    '1080p Medium': '29.9% (56.6fps)',
    '1440p Ultra': '',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'TU117, 896 shaders, 1590MHz, 4GB GDDR6@12Gbps, 192GB/s, 75W',
  },
  {
    'Graphics Card': 'Intel Arc A380',
    'Lowest Price': '$119',
    '1080p Ultra': '18.7% (28.4fps)',
    '1080p Medium': '28.6% (54.3fps)',
    '1440p Ultra': '13.6% (19.5fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'ACM-G11, 1024 shaders, 2450MHz, 6GB GDDR6@15.5Gbps, 186GB/s, 75W',
  },
  {
    'Graphics Card': 'Radeon RX 570 4GB',
    'Lowest Price': 'Row 70 - Cell 1',
    '1080p Ultra': '18.5% (28.1fps)',
    '1080p Medium': '28.2% (53.6fps)',
    '1440p Ultra': '13.9% (19.9fps)',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'Polaris 20, 2048 shaders, 1244MHz, 4GB GDDR5@7Gbps, 224GB/s, 150W',
  },
  {
    'Graphics Card': 'GeForce GTX 1650',
    'Lowest Price': 'Row 71 - Cell 1',
    '1080p Ultra': '17.8% (27.0fps)',
    '1080p Medium': '27.1% (51.3fps)',
    '1440p Ultra': '',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'TU117, 896 shaders, 1665MHz, 4GB GDDR5@8Gbps, 128GB/s, 75W',
  },
  {
    'Graphics Card': 'GeForce GTX 970',
    'Lowest Price': 'Row 72 - Cell 1',
    '1080p Ultra': '17.5% (26.5fps)',
    '1080p Medium': '25.9% (49.0fps)',
    '1440p Ultra': '',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'GM204, 1664 shaders, 1178MHz, 4GB GDDR5@7Gbps, 256GB/s, 145W',
  },
  {
    'Graphics Card': 'Radeon RX 6400',
    'Lowest Price': 'Row 73 - Cell 1',
    '1080p Ultra': '15.9% (24.1fps)',
    '1080p Medium': '27.0% (51.1fps)',
    '1440p Ultra': '',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'Navi 24, 768 shaders, 2321MHz, 4GB GDDR6@16Gbps, 128GB/s, 53W',
  },
  {
    'Graphics Card': 'GeForce GTX 1050 Ti',
    'Lowest Price': 'Row 74 - Cell 1',
    '1080p Ultra': '13.1% (19.8fps)',
    '1080p Medium': '20.0% (38.0fps)',
    '1440p Ultra': '',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'GP107, 768 shaders, 1392MHz, 4GB GDDR5@7Gbps, 112GB/s, 75W',
  },
  {
    'Graphics Card': 'GeForce GTX 1060 3GB*',
    'Lowest Price': 'Row 75 - Cell 1',
    '1080p Ultra': '',
    '1080p Medium': '27.7% (52.5fps)',
    '1440p Ultra': '',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'GP106, 1152 shaders, 1708MHz, 3GB GDDR5@8Gbps, 192GB/s, 120W',
  },
  {
    'Graphics Card': 'GeForce GTX 1630',
    'Lowest Price': 'Row 76 - Cell 1',
    '1080p Ultra': '11.1% (16.9fps)',
    '1080p Medium': '17.8% (33.8fps)',
    '1440p Ultra': '',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'TU117, 512 shaders, 1785MHz, 4GB GDDR6@12Gbps, 96GB/s, 75W',
  },
  {
    'Graphics Card': 'Radeon RX 560 4GB',
    'Lowest Price': 'Row 77 - Cell 1',
    '1080p Ultra': '9.7% (14.7fps)',
    '1080p Medium': '16.7% (31.7fps)',
    '1440p Ultra': '',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'Baffin, 1024 shaders, 1275MHz, 4GB GDDR5@7Gbps, 112GB/s, 60-80W',
  },
  {
    'Graphics Card': 'GeForce GTX 1050*',
    'Lowest Price': 'Row 78 - Cell 1',
    '1080p Ultra': '',
    '1080p Medium': '15.7% (29.7fps)',
    '1440p Ultra': '',
    '4K Ultra': '',
    'Specifications (Links to Review)':
      'GP107, 640 shaders, 1455MHz, 2GB GDDR5@7Gbps, 112GB/s, 75W',
  },
  {
    'Graphics Card': 'Radeon RX 550 4GB',
    'Lowest Price': 'Row 79 - Cell 1',
    '1080p Ultra': '',
    '1080p Medium': '10.3% (19.5fps)',
    '1440p Ultra': '',
    '4K Ultra': '',
    'Specifications (Links to Review)': 'Lexa, 640 shaders, 1183MHz, 4GB GDDR5@7Gbps, 112GB/s, 50W',
  },
]

export default x
