<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by Ardian Webi Kirda
|---------------------------------
*/
class C_anggota extends IAN_Controller{

	var $image_path;
	var $image_url;

	public function __construct(){
		parent::__construct();
		$this->load->model('anggota/m_anggota');
		$this->image_path   = 'images';
        $this->image_url    = base_url().'images/';
	}

	public function getAnggota(){
        $start      = ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      = ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		
		$result 		= $this->m_anggota->getGridAnggota($start, $limit);
		$resultCount 	= $this->m_anggota->countGridAnggota();
		$count 			= $resultCount->num_rows();

		foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'nama_lengkap'		=> $value->nama_lengkap,
				'code_anggota'		=> $value->code_anggota,
				'card_id'			=> $value->card_id,
				'no_ktp' 			=> $value->no_ktp,
				'tgl_lahir' 		=> $value->tgl_lahir,
				'tmp_lahir' 		=> $value->tmp_lahir,
				'gender' 			=> $value->gender,
				'pekerjaan' 		=> $value->pekerjaan,
				'phone' 			=> $value->phone,
				'alamat' 			=> $value->alamat,
				'kecamatan' 		=> $value->kecamatan,
				'desa' 				=> $value->desa,
				'zip' 				=> $value->zip,
				'nama_waris'		=> $value->nama_waris,
				'hubungan' 			=> $value->hubungan,
				'alamat_waris'		=> $value->alamat_waris,
				'id_karyawan'		=> $value->id_karyawan,
				'active' 			=> $value->active,
				'userfile' 			=> base_url().'images/'.$value->userfile
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function delAnggota(){
		$data = json_decode($this->input->post('post'));
		foreach ($data as $row) {
			$picfile = $this->m_anggota->getID($row->id)->userfile;
			$path = FCPATH.'images'.DIRECTORY_SEPARATOR.$picfile;
			$this->m_anggota->deleteAnggota($row->id);
			unlink($path);
		}
		echo json_encode($data);
	}

	public function saveAnggota(){
		$config = array(
	      'allowed_types' => 'jpg|png|gif',
	      'upload_path'   => $this->image_path,
	      'max_size'      => '200',
	      'max_width'     => '1024',
	      'max_height'    => '768'
	    );
    
	    $this->load->library('upload', $config);
	    $this->upload->initialize($config);
	    $up = $this->upload->do_upload();
	    $userfile      = $this->input->post('photo');
	    if (!$up) {
	      $error    = array('error' => $this->upload->display_errors());
	      $msg 		= "Ukuran Gambar Maskimal 200Kb";
	    } else {
	        $upload_data    = $this->upload->data();
	        $userfile       = $upload_data['file_name'];
	        $data_ary = array(
	          'images'      => $upload_data['file_name'],
	          'post_date'   =>  date('d-m-Y H:i:s'),  
	        );
	    }

		$uuid         	 = $this->m_anggota->getUUID();
		$nama_lengkap    = ($this->input->post('nama_lengkap', TRUE) ? $this->input->post('nama_lengkap', TRUE) : '');
		$code_anggota    = $this->m_anggota->code(5,"A");
		$card_id   		 = ($this->input->post('card_id', TRUE) ? $this->input->post('card_id', TRUE) : '');
		$no_ktp   		 = ($this->input->post('no_ktp', TRUE) ? $this->input->post('no_ktp', TRUE) : '');
		$tgl_lahir 	     = ($this->input->post('tgl_lahir', TRUE) ? $this->input->post('tgl_lahir', TRUE) : '');
		$tmp_lahir 	     = ($this->input->post('tmp_lahir', TRUE) ? $this->input->post('tmp_lahir', TRUE) : '');
		$gender  		 = ($this->input->post('gender', TRUE) ? $this->input->post('gender', TRUE) : '');
		$pekerjaan 		 = ($this->input->post('pekerjaan', TRUE) ? $this->input->post('pekerjaan', TRUE) : '');
		$phone   		 = ($this->input->post('phone', TRUE) ? $this->input->post('phone', TRUE) : '');
		$alamat   		 = ($this->input->post('alamat', TRUE) ? $this->input->post('alamat', TRUE) : '');
		$kecamatan 		 = ($this->input->post('kecamatan', TRUE) ? $this->input->post('kecamatan', TRUE) : '');
		$desa   		 = ($this->input->post('desa', TRUE) ? $this->input->post('desa', TRUE) : '');
		$zip 			 = ($this->input->post('zip', TRUE) ? $this->input->post('zip', TRUE) : '');
		$nama_waris		 = ($this->input->post('nama_waris', TRUE) ? $this->input->post('nama_waris', TRUE) : '');
		$hubungan  		 = ($this->input->post('hubungan', TRUE) ? $this->input->post('hubungan', TRUE) : '');
		$alamat_waris	 = ($this->input->post('alamat_waris', TRUE) ? $this->input->post('alamat_waris', TRUE) : '');
		$id_karyawan	 = ($this->input->post('id_karyawan', TRUE) ? $this->input->post('id_karyawan', TRUE) : '');
		$active 		 = ($this->input->post('active', TRUE) ? $this->input->post('active', TRUE) : '');

    	if($active == TRUE) { 
    		$active = 'Y'; 
    	} else { 
    		$active = 'N'; 
    	}

    	if(empty($nama_lengkap)){
    		$success 	= 3;
    		$msg 		= "Data Tidak Boleh Kosong";
    	} elseif($this->m_anggota->cekData($code_anggota) == 0){
    		$this->m_anggota->saveAnggota(
    			$uuid, $nama_lengkap, $code_anggota, $card_id, $no_ktp, $tgl_lahir, $tmp_lahir, 
    			$gender, $pekerjaan, $phone, $alamat, $kecamatan, $desa, $zip, $nama_waris, 
    			$hubungan, $alamat_waris, $id_karyawan, $active, $userfile
    		);
    		$success 	= 1;
    		$msg 		= "Data Berhasil Disimpan";
    	} else {
    		$success 	= 2;
    		$msg 		= "Error Please Contact Your Vendor";
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	$data['msg']		= $msg;
    	echo json_encode($data);    	
	}

	public function editAnggota(){
		$config = array(
	      'allowed_types' => 'jpg|png|gif',
	      'upload_path'   => $this->image_path,
	      'max_size'      => '200',
	      'max_width'     => '1024',
	      'max_height'    => '768'
		 );
		    
		  $this->load->library('upload', $config);
		  $this->upload->initialize($config);
		  $userfile     ='noimage.jpg';
		  if (!($this->upload->do_upload())) {
		    $error = array('error' => $this->upload->display_errors());
		    $msg = "Periksa Kembali Ukuran Gambar";
		  } else {
		      $upload_data = $this->upload->data();
		      $userfile     = $upload_data['file_name'];
		      $data_ary = array(
		        'images'      => $upload_data['file_name'],
		        'post_date'   =>  date('d-m-Y H:i:s'),  
		      );
		  }

		$id 			 = ($this->input->post('id', TRUE) ? $this->input->post('id', TRUE) : '');
		$nama_lengkap    = ($this->input->post('nama_lengkap', TRUE) ? $this->input->post('nama_lengkap', TRUE) : '');
		$card_id   		 = ($this->input->post('card_id', TRUE) ? $this->input->post('card_id', TRUE) : '');
		$no_ktp   		 = ($this->input->post('no_ktp', TRUE) ? $this->input->post('no_ktp', TRUE) : '');
		$tgl_lahir 	     = ($this->input->post('tgl_lahir', TRUE) ? $this->input->post('tgl_lahir', TRUE) : '');
		$tmp_lahir 	     = ($this->input->post('tmp_lahir', TRUE) ? $this->input->post('tmp_lahir', TRUE) : '');
		$gender  		 = ($this->input->post('gender', TRUE) ? $this->input->post('gender', TRUE) : '');
		$pekerjaan 		 = ($this->input->post('pekerjaan', TRUE) ? $this->input->post('pekerjaan', TRUE) : '');
		$phone   		 = ($this->input->post('phone', TRUE) ? $this->input->post('phone', TRUE) : '');
		$alamat   		 = ($this->input->post('alamat', TRUE) ? $this->input->post('alamat', TRUE) : '');
		$kecamatan 		 = ($this->input->post('kecamatan', TRUE) ? $this->input->post('kecamatan', TRUE) : '');
		$desa   		 = ($this->input->post('desa', TRUE) ? $this->input->post('desa', TRUE) : '');
		$zip 			 = ($this->input->post('zip', TRUE) ? $this->input->post('zip', TRUE) : '');
		$nama_waris		 = ($this->input->post('nama_waris', TRUE) ? $this->input->post('nama_waris', TRUE) : '');
		$hubungan  		 = ($this->input->post('hubungan', TRUE) ? $this->input->post('hubungan', TRUE) : '');
		$alamat_waris	 = ($this->input->post('alamat_waris', TRUE) ? $this->input->post('alamat_waris', TRUE) : '');
		$id_karyawan	 = ($this->input->post('id_karyawan', TRUE) ? $this->input->post('id_karyawan', TRUE) : '');
		$active 		 = ($this->input->post('active', TRUE) ? $this->input->post('active', TRUE) : '');

		if($active == TRUE) { 
    		$active = 'Y'; 
    	} else { 
    		$active = 'N'; 
    	}

    	if($userfile=="noimage.jpg"){
	      $this->m_anggota->updateAnggotaWP($id, $nama_lengkap, $code_anggota, $card_id, $no_ktp, $tgl_lahir, $tmp_lahir, 
    			$gender, $pekerjaan, $phone, $alamat, $kecamatan, $desa, $zip, $nama_waris, 
    			$hubungan, $alamat_waris, $id_karyawan, $active);
	      $success = "Data Berhasil Dirubah"; 
	    } else {
	      if(empty($nama_lengkap)){ 
	        $success = "Pengisian Data Salah"; 
	      } else if($this->m_anggota->cekID($id) == 1){ 
	        $data       = ($this->input->post('id', TRUE) ? $this->input->post('id', TRUE) : '');
	        $picfile    = $this->m_anggota->getID($data)->userfile;
	        $path       = FCPATH.'images'.DIRECTORY_SEPARATOR.$picfile;
	        unlink($path);
	        $this->m_anggota->updateAnggota($id, $nama_lengkap, $code_anggota, $card_id, $no_ktp, $tgl_lahir, $tmp_lahir, 
    			$gender, $pekerjaan, $phone, $alamat, $kecamatan, $desa, $zip, $nama_waris, 
    			$hubungan, $alamat_waris, $id_karyawan, $active, $userfile);
	        $success = "Data Berhasil Dirubah"; 
	      } else { 
	        $success = "Pengisian Data Salah";  
	      }
	    }
	    $data = array('total'=>$success, 'success'=>TRUE);
	    echo json_encode($data); 

	}

	public function searchAnggota(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_anggota->searchAnggota($name);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'nama_lengkap'		=> $value->nama_lengkap,
				'code_anggota'		=> $value->code_anggota,
				'card_id'			=> $value->card_id,
				'no_ktp' 			=> $value->no_ktp,
				'tgl_lahir' 		=> $value->tgl_lahir,
				'tmp_lahir' 		=> $value->tmp_lahir,
				'gender' 			=> $value->gender,
				'pekerjaan' 		=> $value->pekerjaan,
				'phone' 			=> $value->phone,
				'alamat' 			=> $value->alamat,
				'kecamatan' 		=> $value->kecamatan,
				'desa' 				=> $value->desa,
				'zip' 				=> $value->zip,
				'nama_waris'		=> $value->nama_waris,
				'hubungan' 			=> $value->hubungan,
				'alamat_waris'		=> $value->alamat_waris,
				'id_karyawan'		=> $value->id_karyawan,
				'active' 			=> $value->active,
				'userfile' 			=> base_url().'images/'.$value->userfile
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}
}